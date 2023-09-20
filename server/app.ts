import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose  from "mongoose";


import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();
dotenv.config();
// Set up mongoose connection
mongoose.set("strictQuery", false);
const connectionString = process.env.ATLAS_URI || "";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(connectionString);
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
