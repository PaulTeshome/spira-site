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

export const updateMotto = (req, res) => {
    const q= ""

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

export const updateFooter = (req, res) => {
    const q= ""

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

export const updateAbout = (req, res) => {
    const q= ""

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}