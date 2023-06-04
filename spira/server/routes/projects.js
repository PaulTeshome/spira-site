import express from "express";
import { getProjects, addProject,deleteProject } from "../controllers/projects.js";

const router = express.Router();

router.get('/getProjects', getProjects);
router.post('/addProject', addProject);
router.delete('/deleteProject', deleteProject);


export default router