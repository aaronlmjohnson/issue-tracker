import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  ActivityController from "../controllers/activityController";
import requireAuth from '../middleware/requireAuth';

const controller = ActivityController();

router.get('/activities', controller.getActivities);
//router.use(requireAuth);


export default router;

/* Issue Tracker project id: 6519bb8b3fb55acd186c86e4 */