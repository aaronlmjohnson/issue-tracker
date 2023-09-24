import User from "../models/user";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createToken = (_id:import("mongoose").Types.ObjectId)=> jwt.sign({_id}, process.env.SECRET, { expiresIn: '7d' });

export const createUser = asyncHandler(async (req, res, next)=>{
    try{
        bcrypt.hash(req.body.password, 10, async(err, hashedPassword)=>{
            const user = new User({
                username: req.body.username,
                password: hashedPassword,
                role: req.body.role
            });

            const result = await user.save();
            const token = createToken(user._id);
            res.status(200).json({user: user.username ,token});
        });
    } catch(err) {
        res.status(400).json({error: err.message});
        return next(err);
    }
});

export const loginUser = asyncHandler(async (req, res, next)=>{
    try{
        const user = await User.findOne({username: req.body.username})
        if(!user) throw Error("No user with that username exists.");

        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) throw Error("Incorrect password.");

        const token = createToken(user._id);
        res.status(200).json({user, token});
    }catch(err){
        res.status(400).json({error: err.message});
        return next(err);
    }
    
});



