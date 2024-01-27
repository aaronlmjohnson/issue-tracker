import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose  from "mongoose";
import session from "express-session";
import passport from "passport";
import LocalStratetgy from "passport-local";

import indexRouter from './routes/index';
import usersRouter from './routes/userRoutes';
import projectRouter from './routes/projectRoutes';
import ticketRouter from './routes/ticketRoutes';
import activityRouter from './routes/activityRoutes';
import compression from 'compression';
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();

dotenv.config();
// Set up mongoose connection
mongoose.set("strictQuery", false);
const connectionString = process.env.MONGO_DB_URI || process.env.DEV_DB_URL;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(connectionString);
}

//limit requests to 30 per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 30
})

app.use(limiter);
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(activityRouter);
app.use('/users', usersRouter);
app.use(projectRouter);
app.use(ticketRouter);

app.use((session({ secret: "daisy", resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded( {extended: false}));

export default app;
