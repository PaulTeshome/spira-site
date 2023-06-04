import express from "express";
import { getFooter, getMotto,  getAbout,updateAll, getAll } from "../controllers/general.js";

const router = express.Router();

router.get('/getMotto', getMotto);
router.get('/getFooter', getFooter);
router.get('/getAbout', getAbout);
router.get('/getAll', getAll);
router.put('/updateAll', updateAll);




export default router