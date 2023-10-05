import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  ProjectController from "../controllers/projectController";

const controller = ProjectController();

/* GET all projects */
router.get('/projects', controller.getAll);
router.get('/projects/:id', controller.get);

router.post('/projects/create', controller.createPost);

router.post('/projects/:id/delete', controller.deletePost);

router.post('/projects/:id/update', controller.updatePost);

export default router;