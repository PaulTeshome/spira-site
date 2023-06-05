import { db } from "../db.js";

export const getServices= (req, res) => {
    const q= "select * from services"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const addService = (req, res) => {
    const q= "INSERT INTO services (service_name,service_description) VALUES (?,?)"

    db.query(q,[req.body.service_name,req.body.service_description], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to insert value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
}

export const updateService = (req, res) => {
    const q= "UPDATE services SET service_name=?, service_description=?  WHERE service_id=?"

    db.query(q,[req.body.service_name,req.body.service_description,req.body.service_id], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to update value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
}

export const deleteService = (req, res) => {
    
}