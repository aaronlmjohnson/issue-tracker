import Project from "../models/project";
import  asyncHandler from "express-async-handler";
import {body, validationResult} from "express-validator";
import Activity from "../models/activityModel";

const activityController = ()=>{

    const getActivities = asyncHandler(async(req, res, next)=>{
        try{
            const activities = await Activity.find({}).limit(15).sort({createdAt: -1});
            if(!activities) throw Error("No activities found");
            res.status(200).json(activities);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    interface IActivity {
        body: String[],
        emphasisText: String[]
    };

    const createActivity = async (activityObj:IActivity)=>{
        const activity = new Activity(activityObj);
        await activity.save();
    }

    return {
        createActivity,
        getActivities

    }

};

export default activityController;

