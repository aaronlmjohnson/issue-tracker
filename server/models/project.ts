import {Schema, model, connect} from "mongoose";

interface IProject {
    title: String,
    description: String,
    date_created: Date
}

const projectSchema = new Schema<IProject>({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true, maxLength: 100 },
    date_created: { type: Date, default: Date.now() }
});

const Project = model<IProject>("Project", projectSchema);

export default Project;