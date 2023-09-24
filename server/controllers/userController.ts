import User from "../models/user";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createToken = (_id:import("mongoose").Types.ObjectId)=> jwt.sign({_id}, process.env.SECRET, { expiresIn: '7d' });

export const createUser = asyncHandler(async (req:any, res:any, next:any)=>{
    try{
        
        bcrypt.hash(req.body.password, 10, async(err, hashedPassword)=>{
            const user = new User({
                username: req.body.username,
                password: hashedPassword,
                role: req.body.role
            });

            const token = createToken(user._id);
            const result = await user.save();
            res.status(200).json({user: user.username ,token});
        });

    } catch(err) {
        res.status(400).json({error: err.message});
        return next(err)
    }
});



