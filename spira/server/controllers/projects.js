import { db } from "../db.js";

export const getProjects = (req, res) => {
    const q= "select * from projects"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const addProject = (req, res) => {
    
}

export const deleteProject = (req, res) => {
    
}