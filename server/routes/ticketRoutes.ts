import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import  TicketHandler from "../controllers/ticketController";
import requireAuth from '../middleware/requireAuth';

const controller = TicketHandler();

router.use(requireAuth);
router.get('/tickets', controller.getAllTickets);
router.get('/tickets/newest', controller.newestTickets);
router.get('/tickets/ticket-enums', controller.getTicketEnums);

router.get('/projects/:projectId/tickets', controller.getAllFromProject);

router.get('/projects/:projectId/tickets/:ticketId', controller.getTicket);

router.post('/projects/:projectId/tickets/create', controller.createTicket);

router.delete('/projects/:projectId/tickets/:ticketId/delete', controller.deleteTicket);

router.patch('/projects/:projectId/tickets/:ticketId/update', controller.updateTicket);

export default router;

