import  express from 'express';
import UserController from '../controllers/userController';
import requireAuth from '../middleware/requireAuth';
const router = express.Router();


const userController = UserController();

//routes required to sign up/ login
router.get('/roles', userController.getRoles);
router.get('/:userId', userController.getUser);
router.post('/sign-up', userController.signUp);
router.post('/login', userController.loginUser);
router.post('/guest-login', userController.guestLogin);

router.use(requireAuth);
//protected routes
router.get('/', userController.getUsers);
router.get('/developers', userController.getDevelopers);
router.get('/developers-by-name', userController.getDevelopersByName);
router.get('/project-leads', userController.getProjectLeads);


export default router;