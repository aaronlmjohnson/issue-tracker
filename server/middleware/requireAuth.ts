import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import * as dotenv from 'dotenv';

const requireAuth = async (req:any, res:any, next:any)=>{
    console.log(req.headers);
    const { authorization } = req.headers;
    if(!authorization) return res.status(401).json({error: 'Auth required'});

    const token = authorization.split(' ')[1];
    dotenv.config();

    try {
        console.log("try block");
        const secret = process.env.SECRET || '';
        const _id  = jwt.verify(token, secret);

        req.user = await User.findOne({ _id }).select('_id');
        next();
    } catch(error){
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }

}

export default requireAuth;