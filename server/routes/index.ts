import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  {projectList} from "../controllers/projectController";
import User from '../models/user';
import { createUser, loginUser, createUserPost } from '../controllers/userController';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Sign Up */

router.post('/sign-up', createUserPost);

/* Login */

router.post('/login', loginUser);

/* GET all projects */
router.get('/projects', projectList);

export default router;