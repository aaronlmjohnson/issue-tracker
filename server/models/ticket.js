"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ticketSchema = new mongoose_1.Schema({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true },
    project: { type: mongoose_1.Schema.Types.ObjectId, ref: "Project", required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    date_created: { type: Date, "default": Date.now },
    priority: {
        type: String,
        required: true,
        "enum": ["High", "Medium", "Low"],
        "default": "Medium"
    },
    status: {
        type: String,
        "enum": ["Not Assigned", "Assigned", "Finished"],
        "default": "Not Assigned"
    },
    type: {
        type: String,
        "enum": ["Feature", "Bug"],
        "default": "Feature"
    }
});
ticketSchema.virtual("url").get(function () {
    return "/tickets/".concat(this._id);
});
var Ticket = (0, mongoose_1.model)("Ticket", ticketSchema);
exports["default"] = Ticket;
