import express from 'express';
const router = express.Router();

const projectController = require("../controllers/projectController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET all projects */
router.get('/projects', projectController.projectList);

export default router;