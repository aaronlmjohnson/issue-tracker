import Project from "../models/project";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import Ticket from "../models/ticketModel";

const ticketController = ()=> {

    const getAllTickets = asyncHandler(async(req, res, next)=>{
        try{
            const tickets = await Ticket.find({})
            .populate('author')
            .populate('assignee')
            .populate('project')
            .sort({title: 1})
            .exec();
            console.log();

            if(!tickets){
                throw Error("No Projects Found");
            } else
                res.status(200).json(tickets);
        }catch(e){
            console.log(e);
        }
        
    });

    const getTicketEnums = asyncHandler(async(req, res, next)=>{
        const priorities = Ticket.schema.path('priority').options.enum;
        const statuses = Ticket.schema.path('status').options.enum;
        const types = Ticket.schema.path('type').options.enum;

        res.status(200).json({priorities, statuses, types});
    });


    const getAllFromProject = asyncHandler(async(req, res, next)=>{
        const project = await Project.findById(req.params.projectId).exec();
        if(!project) res.status(404).send("Project Not Found.");
        const tickets = await Ticket.find({project:project._id})
                                    .populate('author')
                                    .populate('assignee')
                                    .sort({title: 1}).exec();
        if(!tickets) res.status(404).send("Tickets Not Found.");
        else res.status(200).json(tickets);
    });

    const getTicket = asyncHandler(async(req, res, next)=>{
        const ticket = await Ticket.findById(req.params.ticketId).exec();
        if(!ticket) res.status(404).send("Ticket Not Found");
        else res.status(200).json(ticket);
    });
    
    const createTicket = [
        body("title")
        .trim()
        .isLength({min: 1})
        .escape()
        .withMessage("You must provide a title."),
        body("description")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("You must provide a description."),
        body("author")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("Author wasn't provided."),
        body("project")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("Project wasn't provided."),
        body("priority")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("You must select the priority of the ticket."),
        body("status")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("The ticket status wasn't set."),
        body("type")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("You must select the type of ticket."),
        body("date_created")
        .toDate()
        .isISO8601()
        .withMessage("Creation date isn't properly formatted."),
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            try{
                if(!validationErrors.isEmpty())
                    throw new TypeError(validationErrors.array()[0].msg);
                const ticket = new Ticket({
                    title: req.body.title,
                    description: req.body.description,
                    date_created: req.body.date_created,
                    author: req.body.author,
                    project: req.body.project,
                    priority: req.body.priority,
                    status: req.body.status,
                    type: req.body.type,
                    assignee: req.body.assignee
                });

                await ticket.save();
                res.status(200).json({redirectUrl: `/tickets`});

            } catch(err) {
                res.status(400).send({error: err.message});
                return next(err);
            }
        })
    ]

    const deleteTicket = asyncHandler(async(req, res, next)=>{
        const ticket = await Ticket.findById(req.body._id).exec();
        console.log(ticket);
        if(!ticket){
            res.status(404).send("Ticket Not Found");
        } else{
            await Ticket.findByIdAndRemove(ticket.id);
            res.status(200).json({redirectUrl: `/projects/652ff7351c79f67fa29b7ed9/tickets`});
        }
    });


    const updateTicket = [
        body("title")
        .trim()
        .isLength({min: 1})
        .escape()
        .withMessage("You must provide a title."),
        body("description")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("You must provide a description."),
        body("author")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("Author wasn't provided."),
        body("project")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("Project wasn't provided."),
        body("priority")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("You must select the priority of the ticket."),
        body("status")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("The ticket status wasn't set."),
        body("type")
        .trim()
        .escape()
        .isLength({min: 1})
        .withMessage("You must select the type of ticket."),
        body("date_created")
        .isISO8601()
        .toDate()
        .withMessage("Creation date isn't properly formatted."),
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            try{
                if(!validationErrors.isEmpty())
                    throw new TypeError(validationErrors.array()[0].msg);

                const ticket = new Ticket({
                    title: req.body.title,
                    description: req.body.description,
                    date_created: req.body.date_created,
                    author: req.body.author,
                    project: req.body.project,
                    priority: req.body.priority,
                    status: req.body.status,
                    type: req.body.type,
                    assignee: req.body.assignee,
                    _id: req.params.ticketId
                });
                await Ticket.findByIdAndUpdate(req.params.ticketId, ticket, {});
                res.status(200).json({redirectUrl: `/projects/${req.params.projectId}/tickets/${ticket._id}`});

            } catch(err) {
                res.status(400).send({error: err.message});
                return next(err);
            }
        })
    ]

    return{
        getAllTickets,
        getTicket,
        getAllFromProject,
        createTicket,
        deleteTicket,
        updateTicket,
        getTicketEnums
    };
}

export default ticketController;

