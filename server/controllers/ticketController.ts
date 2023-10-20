import Project from "../models/project";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import Ticket from "../models/ticketModel";

const ticketController = ()=> {

    const getAllTickets = asyncHandler(async(req, res, next)=>{
        try{
            const tickets = await Ticket.find({})
            .sort({title: 1})
            .exec();
            if(!tickets){
                throw Error("No Projects Found");
            } else
                res.status(200).json(tickets);
        }catch(e){
            console.log(e);
        }
        
    });

    const getAllFromProject = asyncHandler(async(req, res, next)=>{
        res.send("get all tickets from project");
        console.log(req);
        // try{
        //     const projects = await Project.find({})
        //     .sort({title: 1})
        //     .exec();
        //     if(!projects){
        //         throw Error("No Projects Found");
        //     } else
        //         res.status(200).json(projects);
        // }catch(e){
        //     console.log(e);
        // }
        
    });

    const getTicket = asyncHandler(async(req, res, next)=>{
        console.log(req);
        res.send("get Ticket");

        // const project = await Project.findById(req.params.id).exec();

        // if(!project){
        //     const error = new Error("Project not found");
        //     res.status(404);
        //     next(error);
        // } else
        //     res.status(200).json(project);
    });

    // title: String,
    // description: String,
    // project: Schema.Types.ObjectId,
    // date_created: Date,
    // author: Schema.Types.ObjectId,
    // priority: String,
    // status: String,
    // type: String,
    // assignee: Schema.Types.ObjectId,
    // comments: Schema.Types.ObjectId[]
        /*{
    "title": "Add a comment section",
    "description": "Developers should be able to comment on tickets",
    "date_create":"10/20/2023",
    "author":"65173c56d34c0105811159e1",
    "project": "6519bb8b3fb55acd186c86e4",
    "priority":"High",
    "status":"Not Assigned",
    "type": "Feature",
    "comments":[],
    "assignee": ""
} */

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
        .isISO8601()
        .toDate()
        .withMessage("Creation date isn't properly formatted."),
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            console.log(req.body.date_created);
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
        res.send("Delete Ticket");
        // const project = await Project.findById(req.body._id).exec();
        // /*** When I add Tickets and Comments, in the future, i'll need to remove them too
        //  * when deleting a project
        //  */
        // if(!project){
        //     const error = new Error("Project not found");
        //     res.status(404);
        //     next(error);
        // } else{
        //     await Project.findByIdAndRemove(project.id);
        //     res.status(200).json({redirectUrl: `/projects`});
        // }
            

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
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            try{
                if(!validationErrors.isEmpty())
                    throw new TypeError(validationErrors.array()[0].msg);

                //instead of new project find current one
                const project = new Project({
                    title: req.body.title,
                    description: req.body.description,
                    date_created: req.body.date_created,
                    project_lead: req.body.project_lead,
                    developers_assigned_to: req.body.developers_assigned_to,
                    _id: req.params.id,
                });

                await Project.findByIdAndUpdate(req.params.id, project, {});
                res.status(200).json({redirectUrl: `/projects/${project._id}`});

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
        updateTicket
    };
}

 

export default ticketController;

