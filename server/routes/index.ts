import express from 'express';
const router = express.Router();

import  {projectList} from "../controllers/projectController";
import User from '../models/user';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Sign Up */

router.post('/sign-up', (req:express.Request, res, next)=>{
  console.log(req.body);
  res.send(req.body);
});

/* GET all projects */
router.get('/projects', projectList);

export default router;