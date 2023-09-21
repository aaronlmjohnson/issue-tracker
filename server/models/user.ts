import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, maxLength: 32 },
    password: { type: String, required: true },
    role: { 
        type: String,
        required: true,
        enum: ["Administrator", "Project Lead", "Developer"],
        default: "Developer",
    },
    date_created: { type: Date, default: Date.now}
});

module.exports = mongoose.model("User", UserSchema);