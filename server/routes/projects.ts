import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  ProjectController from "../controllers/projectController";

const controller = ProjectController();

/* GET all projects */
router.get('/projects', controller.getAll);


export default router;