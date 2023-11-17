import User from "../models/userModel";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {body, validationResult} from "express-validator";

const createToken = (_id:import("mongoose").Types.ObjectId)=> jwt.sign({_id}, process.env.SECRET, { expiresIn: '7d' });

const userController = ()=>{

    const getUsers = asyncHandler(async(req, res, next)=>{
        try{
            const users = await User.find({}, {password: 0});
            if(!users) throw Error("No users found");
            res.status(200).json(users);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const newestUsers = asyncHandler(async(req, res, next)=>{
        try{
            const users = await User.find({first_name:{$ne:"Guest"}}, {first_name: 1, last_name: 1, date_created: 1}).sort("-date_created").limit(4);
            if(!users) throw Error("No users found");
            res.status(200).json(users);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const getUser = asyncHandler(async(req, res, next)=>{
        try{
            const user = await User.findById(req.params.userId);
            if(!user) throw Error("User Not Found");
            res.status(200).json(user);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const getRoles = asyncHandler(async(req, res, next)=>{
        try{
            const user = await User.findOne();
            if(!user) throw Error("No roles listed.");
            res.status(200).json(user.roles);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const getDevelopers = asyncHandler(async(req, res, next)=>{
        try{
            const users = await User.find({role:"Developer"}, {password: 0});

            if(!users) throw Error("No users found");
            res.status(200).json(users);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });

    const getDevelopersByName = asyncHandler(async(req, res, next)=>{
        try{
            const users = await User.find({role:"Developer"}, {password: 0, role:0, date_created: 0});
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
            if(!users) throw Error("No users found");
            res.status(200).json(users);

        }catch(e){
            res.status(400).send({error: e.message});
            return next(e);
        }
    });


    const signUp = [
        body("email")
        .custom( async (value) =>{
            const existingUser = await User.findOne({email: value}).exec()
            if(existingUser) 
                throw new Error("Email already exists.")
        })
        .trim()
        .isLength({min: 1})
        .escape()
        .isEmail()
        .withMessage("You must provide an email."),
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
                        email: req.body.email,
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        password: hashedPassword,
                        role: req.body.role
                    });
                    
                    const result = await user.save();
                    const token = createToken(user._id);
                    res.status(200).json({user, token, redirectUrl: user.url});
                });
            } catch(err) {
                res.status(400).send({error: err.message});
                return next(err);
            }
        })
    ]

    const loginUser = asyncHandler(async (req, res, next)=>{
        try{
            const user = await User.findOne({email: req.body.email})
            if(!user) throw Error("Incorrect email.");

            const match = await bcrypt.compare(req.body.password, user.password);
            if(!match) throw Error("Incorrect password.");

            const token = createToken(user._id);
            res.status(200).json({user, token, redirectUrl: "/"});
        }catch(err){
            res.status(400).json({error: err.message});
            return next(err);
        }
    });

    const guestLogin = asyncHandler(async (req, res, next)=>{
        const count = await User.count({first_name:"Guest", last_name:req.body.role}).exec();
        let user = await User.findOne({email:`guest-${req.body.role}-${count - 1}@email.com`});
        
        if(!user){
            user = new User({
                email: `guest-${req.body.role}-${count ? count : 0}@email.com`,
                first_name: "Guest",
                last_name: req.body.role,
                password: "Password1",
                role: req.body.role
            });
            await user.save();
        }

        const token = createToken(user._id);
        console.log("welcome", user.url);
        res.status(200).json({user, token, redirectUrl: user.url})
    });

    return{
        signUp,
        guestLogin,
        getUser,
        newestUsers,
        loginUser,
        getUsers,
        getDevelopers,
        getProjectLeads,
        getDevelopersByName,
        getRoles
    }
}

export default userController;


