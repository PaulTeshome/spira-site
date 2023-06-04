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
    const q= "update "

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}