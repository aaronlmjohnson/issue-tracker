import express from 'express';
import asyncHandler from 'express-async-handler';
import requireAuth from '../middleware/requireAuth';

const router = express.Router();

import  ProjectController from "../controllers/projectController";

const controller = ProjectController();

//router.use(requireAuth);
router.get('/projects', controller.getAll);
router.get('/projects/newest', controller.getNewestProjects);
router.get('/projects/all-project-names', controller.getNamesAndIds);


router.get('/projects/:id', controller.getProject);

router.post('/projects/create', controller.createProject);

router.delete('/projects/:id/delete', controller.deleteProject);

router.patch('/projects/:id/update', controller.updateProject);

export default router;