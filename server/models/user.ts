import {Schema, model} from "mongoose"

interface IUser {
    username: String,
    password: string,
    role: String,
    date_created: Date,
}

const userSchema = new Schema<IUser>({
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

userSchema.virtual("url").get(function(){
    return `/users/${this._id}`;
});

const User = model<IUser>("User", userSchema);

export default User;




