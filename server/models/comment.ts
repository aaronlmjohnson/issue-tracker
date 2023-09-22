import {Schema, model} from "mongoose";

interface IComment {
    author: Schema.Types.ObjectId,
    ticket: Schema.Types.ObjectId,
    message: String,
    date_created: Date,
};

const commentSchema = new Schema<IComment>({
    author: {type: Schema.Types.ObjectId, ref: "User", required: true},
    ticket: {type: Schema.Types.ObjectId, ref: "Ticket", required: true},
    message: { type: String, required: true, maxLength: 100 },
    date_created: { type: Date, default: Date.now() },
});

commentSchema.virtual("url").get(function(){
    return `/comments/${this._id}`;
});

const Comment = model<IComment>("Comment", commentSchema);

export default Comment; 