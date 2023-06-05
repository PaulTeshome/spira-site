import { db } from "../db.js";

export const getMotto = (req, res) => {
    const q= "select comp_motto,comp_mission from main_data where data_id=1"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}


export const getFooter = (req, res) => {
    const q= "select * from main_data where data_id=1"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}


export const getAbout = (req, res) => {
    const q= "select comp_abt from main_data where data_id=1"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const getAll = (req, res) => {
    const q= "select * from main_data where data_id=1"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const updateAll = (req, res) => {
    const q= "UPDATE main_data SET comp_abt=? , comp_email=?, comp_location=?, comp_mission=?, comp_motto=?, comp_phone1=?, comp_phone2=?, insta_link=?, other_socials=?, recipient_email=?  WHERE data_id=1"

    db.query(q,[req.body.comp_abt,req.body.comp_email,req.body.comp_location,req.body.comp_mission,req.body.comp_motto,req.body.comp_phone1,req.body.comp_phone2,req.body.insta_link,req.body.other_socials,req.body.recipient_email],
     (err,data) => {

        if (err) {
            res.status(500).json({ error: 'Failed to update value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });

    
}