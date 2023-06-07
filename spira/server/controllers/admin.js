import { db } from "../db.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const getAdmin= (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, 'spira2121');
        req.user = decoded;

        const username= req.user.username

        console.log("username: " + username);

        const q= "select * from admins where admin_username=?"

        db.query(q,[username], (err,data) => {

            if (err) {
                return res.status(401).send({ message: 'Unauthorized' });
        
            }else {
                console.log("data: " + data)
                res.json(data)
            }
        });

    } catch (e) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
}

export const addAdmin = (req, res) => {
    const q= "INSERT INTO admins (admin_name,admin_description) VALUES (?,?)"

    db.query(q,[req.body.admin_name,req.body.admin_description], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to insert value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
}

export const updateAdmin = (req, res) => {
    const q= "UPDATE admins SET admin_name=?, admin_description=?  WHERE admin_id=?"

    db.query(q,[req.body.admin_name,req.body.admin_description,req.body.admin_id], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to update value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
}

export const deleteAdmin = (req, res) => {

    const q= " DELETE FROM admins WHERE admin_id=?"
    db.query(q,[req.body.admin_id], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to delete admin in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
    
}