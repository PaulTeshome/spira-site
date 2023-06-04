import express from "express";
import { getTestimonials, updateTestimonial, addTestimonial,deleteTestimonial } from "../controllers/testimonials.js";

const router = express.Router();

router.get('/getTestimonials', getTestimonials);
router.put('/updateTestimonial', updateTestimonial);
router.delete('/deleteTestimonial', deleteTestimonial);
router.post('/addTestimonial', addTestimonial);

export default router