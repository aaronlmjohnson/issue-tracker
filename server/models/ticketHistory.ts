import {Schema, model} from "mongoose";

interface ITicketHistory {
    fieldToUpdate: {
        type: String,
        required: true,
        enum: ["Prioirity", "Status", "Assignee"]
    },
    previousValue: Schema.Types.Mixed,
    updatedValue: Schema.Types.Mixed,
    ticket: Schema.Types.ObjectId,
    date_updated: Date,
};

const ticketHistorySchema = new Schema<ITicketHistory>({
    fieldToUpdate: {type: String, ref: "User", required: true},
    ticket: {type: Schema.Types.ObjectId, ref: "Ticket", required: true},
    previousValue: { any: Schema.Types.Mixed, default: null},
    updatedValue: { any: Schema.Types.Mixed, required: true},
    date_updated: { type: Date, default: Date.now()},
});

// ticketHistorySchema.virtual("url").get(function(){
//     return `/projects/${this._id}`;
// });

const TicketHistory = model<ITicketHistory>("TicketHistory", ticketHistorySchema);

export default TicketHistory; 