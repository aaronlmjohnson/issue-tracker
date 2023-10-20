import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  TicketHandler from "../controllers/ticketController";

const controller = TicketHandler();

router.get('/tickets', controller.getAll);

/*GET all the tickets for a select project */
router.get('/projects/:projectId/tickets', controller.getAllFromProject);

/* GET a single ticket from a select project */
router.get('/projects/:projectId/tickets/:ticketId', controller.get);

router.post('/projects/:projectId/tickets/create', controller.create);

router.delete('/projects/:projectId/tickets/:ticketId/delete', controller.delete);

router.patch('/projects/:projectId/tickets/:ticketId/update', controller.update);

export default router;