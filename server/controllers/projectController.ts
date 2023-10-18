import Project from "../models/project";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";

const projectController = ()=> {

    const getAll = asyncHandler(async(req, res, next)=>{
        try{
            const projects = await Project.find({})
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

    const get = asyncHandler(async(req, res, next)=>{
        const project = await Project.findById(req.params.id).exec();

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
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            try{
                console.log(req.body);
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
                res.status(200).json({redirectUrl: `/projects/${project._id}`});

            } catch(err) {
                res.status(400).send({error: err.message});
                return next(err);
            }
        })
    ]

    return{
        getAll,
        get,
        createPost,
        deletePost,
        updatePost
    };
}

 

export default projectController;

