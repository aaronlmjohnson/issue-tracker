const Project = require("../models/project");
const asyncHandler = require("express-async-handler");

exports.projectList = asyncHandler(async(req, res, next)=>{
    const projects = await Project.find({})
        .sort({title: 1})
        .exec();
    res.status(200).json(projects);
})