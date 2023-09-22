"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
;
var commentSchema = new mongoose_1.Schema({
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    ticket: { type: mongoose_1.Schema.Types.ObjectId, ref: "Ticket", required: true },
    message: { type: String, required: true, maxLength: 100 },
    date_created: { type: Date, "default": Date.now() }
});
commentSchema.virtual("url").get(function () {
    return "/comments/".concat(this._id);
});
var Comment = (0, mongoose_1.model)("Comment", commentSchema);
exports["default"] = Comment;
