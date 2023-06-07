import express from "express";
import {addAdmin ,getAdmin,updateAdmin,deleteAdmin, updateAdminProfile} from "../controllers/admin.js";

const router= express.Router();

router.post('/addAdmin', addAdmin);
router.get('/getAdmin', getAdmin);
router.put('/updateAdminProfile', updateAdminProfile);
router.put('/updateAdmin', updateAdmin);
router.delete('/deleteAdmin', deleteAdmin);

export default router;