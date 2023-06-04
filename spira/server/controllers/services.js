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
    
}

export const updateService = (req, res) => {
    
}

export const deleteService = (req, res) => {
    
}