import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  TicketHandler from "../controllers/ticketController";
import requireAuth from '../middleware/requireAuth';

const controller = TicketHandler();

router.use(requireAuth);
router.get('/tickets', controller.getAllTickets);
router.get('/tickets/ticket-enums', controller.getTicketEnums);


/*GET all the tickets for a select project */
router.get('/projects/:projectId/tickets', controller.getAllFromProject);

/* GET a single ticket from a select project */
router.get('/projects/:projectId/tickets/:ticketId', controller.getTicket);

router.post('/projects/:projectId/tickets/create', controller.createTicket);

router.delete('/projects/:projectId/tickets/:ticketId/delete', controller.deleteTicket);

router.patch('/projects/:projectId/tickets/:ticketId/update', controller.updateTicket);

export default router;

/* Issue Tracker project id: 6519bb8b3fb55acd186c86e4 */