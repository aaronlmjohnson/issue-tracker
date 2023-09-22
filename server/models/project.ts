import {Schema, model, connect} from "mongoose";

interface IProject {
    title: String,
    description: String,
    date_created: Date,
    project_lead: Schema.Types.ObjectId,
    developers_assigned_to: Schema.Types.ObjectId
};

const projectSchema = new Schema<IProject>({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true, maxLength: 100 },
    date_created: { type: Date, default: Date.now() },
    project_lead: {type: Schema.Types.ObjectId, ref: "User", required: true},
    developers_assigned_to: [{type: Schema.Types.ObjectId, ref: "User"}]
});

projectSchema.virtual("url").get(function(){
    return `/projects/${this._id}`;
});

const Project = model<IProject>("Project", projectSchema);

export default Project; 