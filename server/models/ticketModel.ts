import {Schema, model} from "mongoose"

interface ITicket {
    title: String,
    description: String,
    project: Schema.Types.ObjectId,
    date_created: Date,
    author: Schema.Types.ObjectId,
    priority: String,
    status: String,
    type: String,
    assignee: Schema.Types.ObjectId,
    comments: Schema.Types.ObjectId[],
    priorities: any,
    statuses: any,
    types: any
}

const ticketSchema = new Schema<ITicket>({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true },
    project: {type: Schema.Types.ObjectId, ref: "Project", required: true},
    author: {type: Schema.Types.ObjectId, ref: "User", required: true},
    date_created: { type: Date, default: Date.now()},
    priority: { 
        type: String,
        required: true,
        enum: ["High", "Medium", "Low"],
        default: "Medium",
    },
    status: { 
        type: String,
        enum: ["Not Assigned", "Assigned", "Finished"],
        default: "Not Assigned",
    },
    type:{
        type: String,
        enum: ["Feature", "Bug"],
        default: "Feature",
    },
    assignee:{ type: Schema.Types.ObjectId, ref: "User"},
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}]
});

ticketSchema.virtual('priorities').get(function() {
    return ticketSchema.path('priority').options.enum;
});

ticketSchema.virtual('types').get(function() {
    return ticketSchema.path('type').options.enum;
});

ticketSchema.virtual('statuses').get(function() {
    return ticketSchema.path('status').options.enum;
});

const Ticket = model<ITicket>("Ticket", ticketSchema);

export default Ticket;