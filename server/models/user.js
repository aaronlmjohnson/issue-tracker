"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, maxLength: 32 },
    password: { type: String, required: true },
    role: {
        type: String,
        required: true,
        "enum": ["Administrator", "Project Lead", "Developer"],
        "default": "Developer"
    },
    date_created: { type: Date, "default": Date.now }
});
userSchema.virtual("url").get(function () {
    return "/users/".concat(this._id);
});
var User = (0, mongoose_1.model)("User", userSchema);
exports["default"] = User;
