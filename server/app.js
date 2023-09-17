const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
dotenv.config();
// Set up mongoose connection
const mongoose = require("mongoose");
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

module.exports = app;
