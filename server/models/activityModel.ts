import {Schema, model} from "mongoose";

interface IActivity {
    actions: ActionObject,
};

type ActionObject = {
    body: string,
    emphsisContent: string[]
}


const activityScehma = new Schema<IActivity>({
    actions: {required: true},
},     
    {timestamps:true}
);

// ticketHistorySchema.virtual("url").get(function(){
//     return `/projects/${this._id}`;
// });

const TicketHistory = model<IActivity>("TicketHistory", activityScehma);

export default TicketHistory; 