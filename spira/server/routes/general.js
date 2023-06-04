import express from "express";
import { getFooter,updateFooter, getMotto, updateMotto, getAbout,updateAbout } from "../controllers/general.js";

const router = express.Router();

router.get('/getMotto', getMotto);
router.put('/updateMotto', updateMotto);

router.get('/getFooter', getFooter);
router.put('/updateFooter', updateFooter);

router.get('/getAbout', getAbout);
router.put('/updateAbout', updateAbout);

export default router