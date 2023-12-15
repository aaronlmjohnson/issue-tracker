import {Schema, model} from "mongoose"
import date from "date-and-time";

interface IUser {
    email: String,
    first_name: String,
    last_name: String,
    password: string,
    role: String,
    date_created: Date,
    url: String,
    firstName: String,
    roles: String[],
    fullName: String,
    actions:any
}

//remove username 
//add email, first name, last name
//virtual for full name
const opts = { toJSON: {virtuals: true} };

const userSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true},
    first_name: {type: String, required: true},
    last_name:{type: String, required: true},
    password: { type: String, required: true },
    role: { 
        type: String,
        required: true,
        enum: ["Administrator", "Project_Lead", "Developer"],
        default: "Developer",
    },
    date_created: { type: Date, default: Date.now}
}, opts);

userSchema.virtual("url").get(function(){
    return `/users/${this._id}`;
});

userSchema.virtual("fullName").get(function(){
    return this.first_name + " " + this.last_name;
});

userSchema.virtual('roles').get(function() {
    return userSchema.path('role').options.enum;
});

const User = model<IUser>("User", userSchema);

export default User;




