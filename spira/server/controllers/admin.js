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

        const id= req.user.id

        const q= "select * from admins where admin_id=?"

        db.query(q,[id], (err,data) => {

            if (err) {
                return res.status(401).send({ message: 'Unauthorized' });
        
            }else {
                res.json(data)
            }
        });

    } catch (e) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
}

export const getAllAdmins= (req, res) => {

    const userId= req.query.id;
    let q;

    if(userId>2) {
        q= "select * from admins where added_by=?"
        db.query(q,[userId], (err,data) => {

            if (err) {
                return res.status(404).send({ message: 'No admin accounts added by you found' });
        
            }else {
                if(data.length>0){
                    res.json(data)
                }else{
                return res.status(404).send({ message: 'No admin accounts added by you found' });

                }
            }
        });
    }else if(userId<3 && userId>0){
        q= "select * from admins where admin_id>2"
        db.query(q, (err,data) => {

            if (err) {
                return res.status(404).send({ message: 'Error! 404 Not found' });
        
            }else {
                if(data.length>0){
                    res.json(data)
                }else{
                    console.log("no damin data found")
                return res.status(404).send({ message: 'No admin accounts added by you found' });

                }
                
            }
        });
    }
}

export const addAdmin = (req, res) => {

    const q1= "SELECT * FROM admins WHERE admin_username=? OR admin_email=?"

    db.query(q1,[req.body.admin_username,req.body.admin_email], (err,data) => {

        if (err) {
            return res.status(401).send({ message: 'Connection error try again.' });
    
        }else {
            if(data.length>0){
                return res.status(409).send({ message: 'Admin with this username or email already exists. Please use new credentials.' });
            }else{

                const q= "INSERT INTO admins (admin_username,admin_email,admin_password,added_by) VALUES (?,?,?,?)"

                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.admin_password, salt);
                
                db.query(q,[req.body.admin_username,req.body.admin_email,hash, req.body.added_by], (err,data) => {
            
                    if (err) {
                        console.log(err)
                        res.status(500).json({ message: 'Failed to insert value in database. Please try again.' })
                    }else {
                        res.json(data)
                    }
                });
            }
            
        }
    });

}

export const updateAdmin = (req, res) => {

    const salt = bcrypt.genSaltSync(10);

    const query= "SELECT * FROM admins WHERE admin_id=? "

    db.query(query,[req.body.admin_id], (err,data) => {

        if (err) {
            return res.status(404).json({ error: 'Failed to update value in database. Insert proper previous password and try again.' })
    
        }else {

            try{
                const isMatch = bcrypt.compareSync(req.body.old_password, data[0].admin_password);
                if(!isMatch){
                    return res.status(404).json({ error: 'Failed to update value in database. Insert proper previous password and try again.' })
                }else{
                    const hash = bcrypt.hashSync(req.body.update_password, salt);
                    const q= "UPDATE admins SET admin_username=?, admin_email=? ,admin_password=?  WHERE admin_id=?"


                    db.query(q,[req.body.admin_username,req.body.admin_email,hash,req.body.admin_id], (err,data) => {

                        if (err) {
                            console.log(err)
                            return res.status(500).json({ error: 'Connection Error! please try again.' })
                        }else {
                            res.json(data)
                        }
                    });
                }
              }catch(err){
                console.log("bcryp err")
                return res.status(404).json({ error: 'Failed to update value in database. Insert proper previous password and try again.' })
              }

            
        }
    });

    
}

export const updateAdminProfile = (req, res) => {
    const q= "UPDATE admins SET admin_username=?, admin_email=?  WHERE admin_id=?"

    db.query(q,[req.body.admin_username,req.body.admin_email,req.body.admin_id], (err,data) => {

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