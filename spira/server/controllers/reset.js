import crypto from "crypto"
import { db } from "../db.js";
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const passwordReset = (req, res) => {
    
    const { email } = req.body;


      db.query("SELECT * FROM admins WHERE admin_email = ?", [email], (err,data) => {
        if (err) {
            res.json(err)
        }
        else {
            const user = data.rows[0];
  
            if (!user) {
              return res.status(404).json({ message: "Admin not found. Please try a registered admin." }); 
            }

            const token = crypto.randomBytes(20).toString("hex");
            const expires = Date.now() + 3600000; // 1 hour

            db.query("UPDATE admins SET password_reset_token = ?, password_reset_expires = ? WHERE admin_email = $3",
                [token, expires, email],(err,data) => {

                    if (err) {
                        res.json(err)
                    }else {
                        const resetURL = `http://localhost:3000/password-reset?token=${token}`;

                        try{
                            transporter.sendMail({
                                to: email,
                                subject: "Password Reset Request",
                                text: `You are receiving this email because you (or someone else) has requested a password reset for your account.
                                \n\nPlease click the following link to reset your password:\n\n${resetURL}\n\n
                                If you did not request this reset, please ignore this email and your password will remain unchanged.\n`,
                              });
                        } catch (error) {
                            console.error(error);
                            res.status(500).json({ message: "Error sending password reset email" });
                        } 
                        
                        res.json({ message: "Password reset email sent" });
                    }
                });
        }
    });
     
  
   
}

export const passwordResetSubmit = (req, res) => {
    const { token, password } = req.body;
    
    db.query("SELECT * FROM admins WHERE password_reset_token = ? AND password_reset_expires > ?", [
        token,
        new Date(),
      ],(err,data) => {

        if (err) {
            res.status(500).json( "Error resetting password. ", err)
        }
        else {
            const user = data.rows[0];

            if (!user) {
              return res.status(400).json({ message: "Invalid or expired token" });
            }

            db.query("UPDATE admins SET admin_password = ?, password_reset_token = NULL, password_reset_expires = NULL WHERE email = ?", [
                password,
                user.email,
                    ], (err,data) => {
        
                        if (err) {
                            res.status(500).json( "Error resetting password. ", err)
                        }else {
                            res.json("Password reset successful");
                        }
                });
        }
    });
}