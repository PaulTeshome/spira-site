import express from "express";
import { getProjects, addProject, updateProject ,deleteProject } from "../controllers/projects.js";

const router = express.Router();

router.get('/getProjects', getProjects);
router.put('/updateProject', updateProject);
router.delete('/deleteProject', deleteProject);
router.post('/addProject', addProject);

export default router