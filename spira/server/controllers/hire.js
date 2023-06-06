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
    const q= "select * from hire_requests"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const makeRequest = (req, res) => {
    const q= "INSERT INTO hire_requests (first_name,last_name,email,comp_name,phone,chosen_service,specify) VALUES (?,?,?,?,?,?,?)"

    db.query(q, [req.body.first_name, req.body.last_name, req.body.email, req.body.comp_name, req.body.phone, req.body.services, req.body.specify],(err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });

    let info = transporter.sendMail({
        from: '"Sender Name" <your-email@example.com>', // sender address
        to: "recipient@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
      });

    console.log("Message sent: %s", info.messageId);
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

