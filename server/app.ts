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

import usersRouter from './routes/userRoutes';
import projectRouter from './routes/projectRoutes';
import ticketRouter from './routes/ticketRoutes';
import activityRouter from './routes/activityRoutes';
import compression from 'compression';
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import debug from 'debug';

const app = express();

dotenv.config();
// Set up mongoose connection
mongoose.set("strictQuery", false);
const connectionString = process.env.MONGO_DB_URI || process.env.DEV_DB_URL;
debug(connectionString);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(connectionString);
}

// limit requests to 500 per minute
// const limiter = rateLimit({
//   windowMs: 1 * 60 * 1000,
//   limit: 500
// })

//app.use(limiter);
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//API Index Page
app.get('/', function (req, res) {
  res.send({ title: 'Issue Tracker API' });
});

app.use(activityRouter);
app.use('/users', usersRouter);
app.use(projectRouter);
app.use(ticketRouter);

app.use((session({ secret: "daisy", resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded( {extended: false}));

export default app;
