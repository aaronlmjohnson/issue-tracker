"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true, maxLength: 32 },
    description: { type: String, required: true, maxLength: 100 },
    date_created: { type: Date, "default": Date.now() }
});
var Project = (0, mongoose_1.model)("Project", projectSchema);
exports["default"] = Project;
