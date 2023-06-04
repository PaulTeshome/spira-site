import express from "express";
import { getServices, updateService, addService,deleteService } from "../controllers/services.js";

const router = express.Router();

router.get('/getServices', getServices);
router.put('/updateService', updateService);
router.delete('/deleteService', deleteService);
router.post('/addService', addService);

export default router