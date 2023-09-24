import User from "../models/user";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';



export const createUser = asyncHandler(async (req:any, res:any, next:any)=>{
    try{
        bcrypt.hash(req.body.password, 10, async(err, hashedPassword)=>{
            const user = new User({
                username: req.body.username,
                password: hashedPassword,
                role: req.body.role
            })
            const result = await user.save();
            res.redirect('http://localhost:3000/projects');
        });

    } catch(err) {
        return next(err)
    }
});



