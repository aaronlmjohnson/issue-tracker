import User from "../models/user";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {body, validationResult} from "express-validator";

const createToken = (_id:import("mongoose").Types.ObjectId)=> jwt.sign({_id}, process.env.SECRET, { expiresIn: '7d' });

const userController = ()=>{

    const getUsers = asyncHandler(async(req, res, next)=>{
        try{
            const users = await User.find({}, {password: 0});
            console.log(users);
            if(!users) throw Error("No users found");
            res.status(200).json(users);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const getDevelopers = asyncHandler(async(req, res, next)=>{
        try{
            const users = await User.find({role:"Developer"}, {password: 0});
            console.log(users);
            if(!users) throw Error("No users found");
            res.status(200).json(users);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const getProjectLeads = asyncHandler(async(req, res, next)=>{
        try{
            const users = await User.find({role:"Project Lead"}, {password: 0});
            console.log(users);
            if(!users) throw Error("No users found");
            res.status(200).json(users);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });


    const createUserPost = [
        body("username")
        .custom( async (value) =>{
            const existingUser = await User.findOne({username: value}).exec()
            if(existingUser) 
                throw new Error("Username already exists.")
        })
        .trim()
        .isLength({min: 1})
        .escape()
        .withMessage("You must provide a username.")
        .isAlphanumeric()
        .withMessage("Username contains non-alphanumeric characters."),
        body("password")
        .trim()
        .isStrongPassword(
            {
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 0,
                returnScore: false,
            }
        )
        .withMessage("Weak password provided"),
        asyncHandler(async (req, res, next)=>{
            const validationErrors = validationResult(req);
            try{
                if(!validationErrors.isEmpty())
                    throw new TypeError(validationErrors.array()[0].msg);
            
                bcrypt.hash(req.body.password, 10, async(err, hashedPassword)=>{
                    const user = new User({
                        username: req.body.username,
                        password: hashedPassword,
                        role: req.body.role
                    });
        
                    const result = await user.save();
                    const token = createToken(user._id);
                    res.status(200).json({user: user.username ,token, redirectUrl:"/"});
                });
            } catch(err) {
                res.status(400).send({error: err.message});
                return next(err);
            }
        })
    ]

    const loginUser = asyncHandler(async (req, res, next)=>{
        try{
            const user = await User.findOne({username: req.body.username})
            if(!user) throw Error("No user with that username exists.");

            const match = await bcrypt.compare(req.body.password, user.password);
            if(!match) throw Error("Incorrect password.");

            const token = createToken(user._id);
            res.status(200).json({user, token, redirectUrl: "/"});
        }catch(err){
            res.status(400).json({error: err.message});
            return next(err);
        }
        
    });


    return{
        createUserPost,
        loginUser,
        getUsers,
        getDevelopers,
        getProjectLeads
    }
}

export default userController;


