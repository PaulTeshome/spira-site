import express from "express";
import { passwordReset,passwordResetSubmit } from "../controllers/reset.js";

const router= express.Router();

router.post('/reset', passwordReset);
router.post('/submit', passwordResetSubmit)

export default router;