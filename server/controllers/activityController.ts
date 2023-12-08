import Project from "../models/project";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import Activity from "../models/activityModel";

const activityController = ()=>{

    const getActivities = asyncHandler(async(req, res, next)=>{
        try{
            const activities = await Activity.find({}).limit(15);
            if(!activities) throw Error("No activities found");
            res.status(200).json(activities);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const createActivity = async (activityObj:any)=>{
        const activity = new Activity({
            body: activityObj.body,
            emphasisText:activityObj.strong,
        });
        await activity.save();
    }

    return {
        createActivity,
        getActivities

    }

};

export default activityController;

