import { db } from "../db.js";

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

export const makeRequests = (req, res) => {
    
}

