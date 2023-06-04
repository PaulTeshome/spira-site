import express from "express";
import { getRequests, addRequest } from "../controllers/hire.js";

const router = express.Router();

router.get('/getRequests', getRequests);
router.post('/addRequest', addRequest);

export default router