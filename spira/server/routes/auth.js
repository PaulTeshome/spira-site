import express from "express";
import { register,login, logout, checkLogin } from "../controllers/auth.js";

const router= express.Router();

router.post('/login', login);
router.get('/logout', logout);
router.post('/register', register);
router.get('/check-login', checkLogin);

export default router;