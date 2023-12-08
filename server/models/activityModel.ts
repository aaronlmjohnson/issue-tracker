import {Schema, model} from "mongoose";

interface IActivity {
    body: String,
    emphasisText: String[]
};

const activitySchema = new Schema<IActivity>({
    body: { type: String, required: true},
    emphasisText: { type: [String], required: true}
}, {timestamps:true});


const Activity = model<IActivity>("Activity", activitySchema);

export default Activity; 