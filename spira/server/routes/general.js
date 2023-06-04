import express from "express";
import { getFooter, getMotto, getAbout } from "../controllers/general.js";

const router = express.Router();

router.get('/getMotto', getMotto);
router.get('/getFooter', getFooter);
router.get('/getAbout', getAbout);


export default router