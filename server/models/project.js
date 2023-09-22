"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
;
var projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true, maxLength: 100 },
    date_created: { type: Date, "default": Date.now() },
    project_lead: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    developers_assigned_to: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }]
});
projectSchema.virtual("url").get(function () {
    return "/projects/".concat(this._id);
});
var Project = (0, mongoose_1.model)("Project", projectSchema);
exports["default"] = Project;
