import Project from "../models/project";
import  asyncHandler from "express-async-handler";

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

    const getSelected = asyncHandler(async(req, res, next)=>{
        const project = await Project.findById(req.params.id).exec();
        
        if(!project){
            const error = new Error("Project not found");
            res.status(404);
            next(error);
        } else
            res.status(200).json(project);
    });

    const createGet = asyncHandler(async(req, res, next)=>{
        res.send('Make a project view');
    });

    const createPost = asyncHandler(async(req, res, next)=>{
        res.send('Make a project send response');
    });

    const deleteGet = asyncHandler(async(req, res, next)=>{
        res.send('Delete a project view');
    });

    const deletePost = asyncHandler(async(req, res, next)=>{
        res.send('Delete a project send response');
    });

    const updateGet = asyncHandler(async(req, res, next)=>{
        res.send('Update a project view');
    });

    const updatePost = asyncHandler(async(req, res, next)=>{
        res.send('Update a project send response');
    });

    return{
        getAll,
        getSelected,
        createGet,
        createPost,
        deleteGet,
        deletePost,
        updateGet,
        updatePost
    };
}

 

export default projectController;

