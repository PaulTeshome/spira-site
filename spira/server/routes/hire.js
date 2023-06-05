import express from "express";
import { getRequests, makeRequest, updateStatus } from "../controllers/hire.js";

const router = express.Router();

router.get('/getRequests', getRequests);
router.post('/makeRequest', makeRequest);
router.post('/updateStatus', updateStatus);

export default router