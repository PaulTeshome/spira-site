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
    const q= "INSERT INTO projects (project_title,project_description,project_image) VALUES (?,?,?)"

    db.query(q,[req.body.project_title,req.body.project_description,req.body.imageName], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to insert value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
    
}

export const updateProject = (req, res) => {
    
}

export const deleteProject = (req, res) => {
    
}