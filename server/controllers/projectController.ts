import Project from "../models/projectModel";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import Activity from "./activityController";
import User from "../models/userModel";

const projectController = ()=> {
    const activityHandler = Activity();

    const getAll = asyncHandler(async(req, res, next)=>{
        try{
            const projects = await Project.find({})
            .populate('author', {password: 0})
            .populate('developers_assigned_to', {password: 0})
            .populate('project_lead', {password: 0})
            .sort({title: 1})
            .exec();
            if(!projects){
                throw Error("No Projects Found");
            } else
                res.status(200).json(projects);
        }catch(e){
            console.log(e);
        }
        
    });

    const getNewestProjects = asyncHandler(async(req, res, next)=>{
        try{
            const projects = await Project.find({}, {title: 1, date_created:1})
            .sort("-date_created")
            .exec();
            if(!projects){
                throw Error("No Projects Found");
            } else
                res.status(200).json(projects);
        }catch(e){
            console.log(e);
        }
        
    }); 

    const getNamesAndIds = asyncHandler(async(req, res, next)=>{
        try{
            const projects = await Project.aggregate()
            .project({title: 1, id: 1})
            .sort({})
            .exec();
            if(!projects){
                throw Error("No Projects Found");
            } else
                res.status(200).json(projects);
        }catch(e){
            console.log(e);
        }
        
    });

    const get = asyncHandler(async(req, res, next)=>{
        const project = await Project.findById(req.params.id)
        .populate('author', {password: 0})
        .populate('developers_assigned_to', {password: 0})
        .populate('project_lead', {password: 0})
        .exec();

        if(!project){
            const error = new Error("Project not found");
            res.status(404);
            next(error);
        } else
            res.status(200).json(project);
    });

    const createPost = [
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
        .isMongoId()
        .withMessage("You must provide a valid id for author"),
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            console.log(req.body);
            try{
                if(!validationErrors.isEmpty())
                    throw new TypeError(validationErrors.array()[0].msg);
                const project =  new Project({
                    title: req.body.title,
                    description: req.body.description,
                    date_created: req.body.date_created,
                    project_lead: req.body.project_lead,
                    author: req.body.author,
                    developers_assigned_to: req.body.developers_assigned_to
                });


                await project.save();
                console.log(project);
                //const author = (await User.findById(req.body.loggedInUser)).fullName;
                //console.log(project);
                const activity = {
                    body: ["", " has created the project titled ", "", "."],
                    emphasisText:["project.author.fullName", project.title], 
                };

                activityHandler.createActivity(activity);
                
                res.status(200).json({redirectUrl: `/projects/${project._id}`});

            } catch(err) {
                res.status(400).send({error: err.message});
                return next(err);
            }
        })
    ]

    const deletePost = asyncHandler(async(req, res, next)=>{
        const project = await Project.findById(req.body._id).exec();
        /*** When I add Tickets and Comments, in the future, i'll need to remove them too
         * when deleting a project
         */
        if(!project){
            const error = new Error("Project not found");
            res.status(404);
            next(error);
        } else{
            const userWhoDeleted = (await User.findById(req.body.loggedInUser)).fullName;

            const activity = {
                body: ["", " has deleted the project titled ", "", "."],
                emphasisText:[userWhoDeleted, project.title], 
            };

            activityHandler.createActivity(activity);
            await Project.findByIdAndRemove(project.id);
            res.status(200).json({redirectUrl: `/projects`});
        }
            

    });


    const updatePost = [
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
                console.log(req.body)
                const updater = (await User.findById(req.body.loggedInUser)).fullName;
                const activity = {
                    body: ["", " has updated the project titled ", "", "."],
                    emphasisText:[updater, project.title], 
                };

            activityHandler.createActivity(activity);

                res.status(200).json({redirectUrl: `/projects/${project._id}`});

            } catch(err) {
                res.status(400).send({error: err.message});
                return next(err);
            }
        })
    ]

    return{
        getAll,
        getNewestProjects,
        get,
        getNamesAndIds,
        createPost,
        deletePost,
        updatePost
    };
}

 

export default projectController;

