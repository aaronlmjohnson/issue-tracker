import  express from 'express';
import UserController from '../controllers/userController';
const router = express.Router();


const userController = UserController();

router.get('/', userController.getUsers);
router.get('/developers', userController.getDevelopers);
router.get('/developers-by-name', userController.getDevelopersByName);
router.get('/project-leads', userController.getProjectLeads);
router.get('/roles', userController.getRoles);
router.get('/:userId', userController.getUser);
router.post('/sign-up', userController.signUp);
router.post('/login', userController.loginUser);
router.post('/guest-login', userController.guestLogin)

export default router;