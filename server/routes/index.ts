import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  UserController from '../controllers/userController';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// const userController = UserController();

// /* Sign Up */

// router.post('/sign-up', userController.createUserPost);

// /* Login */

// router.post('/login', userController.loginUser);

/* will need to prevent user's with certain roles from being able to change certain things such as:
  *user's can't delete projects unless created by that user or by an admin
  *user's can't delete other posts they've not created 
  *admins can delete and create anything
*/

export default router;