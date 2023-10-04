import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  ProjectController from "../controllers/projectController";

const controller = ProjectController();

/* GET all projects */
router.get('/projects', controller.getAll);
router.get('/projects/:id', controller.getSelected);

router.post('/projects/create', controller.createPost);

router.get('/projects/:id/delete', controller.deleteGet);
router.post('/projects/:id/delete', controller.deletePost);

router.get('/projects/:id/update', controller.updateGet);
router.post('/projects/:id/update', controller.updatePost);

export default router;