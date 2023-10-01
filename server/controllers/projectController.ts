import Project from "../models/project";
import  asyncHandler from "express-async-handler";

const projectController = ()=>{
    const getAll = asyncHandler(async(req, res, next)=>{
        const projects = await Project.find({})
            .sort({title: 1})
            .exec();
        res.status(200).json(projects);
    });
    return{
        getAll,
    };
}
 

export default projectController;

