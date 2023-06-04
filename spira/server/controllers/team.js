import { db } from "../db.js";

export const getMembers = (req, res) => {
    const q= "select * from team"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const addMember = (req, res) => {
    
}

export const updateMember = (req, res) => {
    
}

export const deleteMember = (req, res) => {
    
}