import  express from 'express';
import UserController from '../controllers/userController';
const router = express.Router();


const userController = UserController();

router.get('/', userController.getUsers);
router.get('/developers', userController.getDevelopers);
router.get('/project-leads', userController.getProjectLeads);
router.get('/:userId', userController.getUser);

/* Sign Up */
router.post('/sign-up', userController.createUserPost);

/* Login */

router.post('/login', userController.loginUser);

export default router;