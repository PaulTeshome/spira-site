import { db } from "../db.js";

export const getTestimonials= (req, res) => {
    const q= "select * from testimonials"

    db.query(q, (err,data) => {

        if (err) {
            res.json(err)
        }else {
            res.json(data)
        }
    });
}

export const addTestimonial = (req, res) => {
    
}

export const updateTestimonial = (req, res) => {
    
}

export const deleteTestimonial = (req, res) => {
    
}