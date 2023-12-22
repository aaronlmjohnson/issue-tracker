import {Schema, Model, model, connect} from "mongoose";
import User from './userModel';
const opts = { toJSON: {virtuals: true} };

interface ProjectDoc {
    title: String,
    description: String,
    date_created: Date,
    project_lead: Schema.Types.ObjectId,
    developers_assigned_to: Schema.Types.ObjectId[],
    author: Schema.Types.ObjectId,
    _id:String
};

interface ProjectVirtuals {
    url:String,
}

interface ActivityObject {
  emphasisText:String[],
  body:String
}

type ProjectModel = Model<ProjectDoc, {}, ProjectVirtuals>

const projectSchema = new Schema<ProjectDoc, ProjectModel, ProjectVirtuals>({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true},
    date_created: { type: Date, default: Date.now() },
    project_lead: {type: Schema.Types.ObjectId, ref: "User", required: true},
    author:{type: Schema.Types.ObjectId, ref: "User",  required: true},
    developers_assigned_to: [{type: Schema.Types.ObjectId, ref: "User"}]
}, opts);

projectSchema.virtual("project-lead", {
  ref: 'User',
  localField: 'projectLeadId',
  foreignField: '_id',
});

projectSchema.virtual("url").get(function(){
  return `/projects/${this._id}`;
});

const Project = model<ProjectDoc, ProjectModel>("Project", projectSchema);

export default Project; 