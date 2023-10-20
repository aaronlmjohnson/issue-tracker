import Project from "../models/project";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";

const ticketController = ()=> {

    const getAllTickets = asyncHandler(async(req, res, next)=>{
        res.send("get all tickets");
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
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            try{
                if(!validationErrors.isEmpty())
                    throw new TypeError(validationErrors.array()[0].msg);
                const project = new Project({
                    title: req.body.title,
                    description: req.body.description,
                    date_created: req.body.date_created,
                    project_lead: req.body.project_lead,
                    developers_assigned_to: req.body.developers_assigned_to
                });

                await project.save();
                res.status(200).json({redirectUrl: `/projects/${project._id}`});

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

