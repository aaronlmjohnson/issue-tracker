"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
;
var ticketHistorySchema = new mongoose_1.Schema({
    fieldToUpdate: { type: String, ref: "User", required: true },
    ticket: { type: mongoose_1.Schema.Types.ObjectId, ref: "Ticket", required: true },
    previousValue: { type: mongoose_1.Schema.Types.Mixed, "default": null },
    updatedValue: { type: mongoose_1.Schema.Types.Mixed, required: true },
    date_updated: { type: Date, "default": Date.now() }
});
// ticketHistorySchema.virtual("url").get(function(){
//     return `/projects/${this._id}`;
// });
var TicketHistory = (0, mongoose_1.model)("TicketHistory", ticketHistorySchema);
exports["default"] = TicketHistory;
