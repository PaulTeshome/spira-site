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
    const q= "INSERT INTO testimonials (testimonial_owner,testimonial_text) VALUES (?,?)"

    db.query(q,[req.body.testimonial_owner,req.body.testimonial_text], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to insert value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
}

export const updateTestimonial = (req, res) => {
    const q= "UPDATE testimonials SET testimonial_owner=?, testimonial_text=?  WHERE testimonial_id=?"

    db.query(q,[req.body.testimonial_owner,req.body.testimonial_text,req.body.testimonial_id], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to update value in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
    
}

export const deleteTestimonial = (req, res) => {
    const q= " DELETE FROM testimonials WHERE testimonial_id=?"
    db.query(q,[req.body.testimonial_id], (err,data) => {

        if (err) {
            console.log(err)
            res.status(500).json({ error: 'Failed to delete testimonial in database. Please try again.' })
        }else {
            res.json(data)
        }
    });
    
}