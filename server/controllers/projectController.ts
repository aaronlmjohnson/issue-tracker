import Project from "../models/project";
import  asyncHandler from "express-async-handler";

const projectController = ()=> {

    const getAll = asyncHandler(async(req, res, next)=>{
        const projects = await Project.find({})
            .sort({title: 1})
            .exec();
        res.status(200).json(projects);
    });

    const getSelected = asyncHandler(async(req, res, next)=>{
        res.send('Get this project');
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

