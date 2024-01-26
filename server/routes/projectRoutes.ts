import express from 'express';
import asyncHandler from 'express-async-handler';
import requireAuth from '../middleware/requireAuth';

const router = express.Router();

import  ProjectController from "../controllers/projectController";

const controller = ProjectController();

console.log("before auth");
router.use(requireAuth);
console.log("post auth");
router.get('/projects', controller.getAll);
router.get('/projects/newest', controller.getNewestProjects);
router.get('/projects/all-project-names', controller.getNamesAndIds);


router.get('/projects/:id', controller.get);

router.post('/projects/create', controller.createPost);

router.delete('/projects/:id/delete', controller.deletePost);

router.patch('/projects/:id/update', controller.updatePost);

export default router;