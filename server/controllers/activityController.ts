import Project from "../models/project";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import Activity from "../models/activityModel";

const activityController = ()=>{
    const createActivity = async (activityObj:any)=>{
        const activity = new Activity({
            body: activityObj.body,
            emphasisText:activityObj.strong,
        });
        await activity.save();
    }

    return {
        createActivity,

    }

};

export default activityController;

