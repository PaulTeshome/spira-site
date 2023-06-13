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



export const getRequests = (req, res) => {
    const q= "SELECT * FROM hire_requests ORDER BY request_id DESC"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const makeRequest = (req, res) => {

    const {first_name, last_name,email,comp_name, phone, services, specify} = req.body;
    const q= "INSERT INTO hire_requests (first_name,last_name,email,comp_name,phone,chosen_service,specify) VALUES (?,?,?,?,?,?,?)"

    db.query(q, [first_name, last_name, email, comp_name, phone, services, specify],(err,data) => {

        if (err) {
           return res.status(500).json("Connection error. Please try again.")
        }else {

            const q= "select recipient_email from main_data where data_id=1"

            db.query(q, (err,data) => {
        
                if (err) {
                    return res.status(500).json("Cannot connect to recipient email. Please try again.")
                }else {

                    console.log("recipient_email",data[0].recipient_email)

                   
                }

                try{
                    let info = transporter.sendMail({
                        from: '"Spira site" <info@spira.com>', 
                        to: `${data[0].recipient_email}`, 
                        subject: "New Request", 
                        text: `Hello Boss!\n A new hire request has been submitted, please contact them whenever you can. Here is their request information\n
                        First name: ${first_name},\n 
                        Last name: ${last_name},\n 
                        Company name: ${comp_name},\n 
                        Phone number: ${phone},\n 
                        Chosen service: ${services},\n 
                        Specification:\n ${specify}\n Have a great day!`,
                        html: "" 
                      });
                }catch(err){
                    return res.status(500).json("Error! Cannot connect to recipient email. Please try again.")
                }
               
            
                return res.status(200).json("Your form has been submitted successfully.Thank you!")
            });

           
        }
    });

   
}

export const updateStatus = (req, res) => {
    const q= "UPDATE hire_requests SET status=? WHERE request_id=?"

    const newStat= !(req.body.status);
    db.query(q, [newStat, req.body.request_id],(err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

