import express from 'express';
const router = express.Router();

console.log("hi");
import  {projectList} from "../controllers/projectController";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all projects */
router.get('/projects', projectList);

export default router;