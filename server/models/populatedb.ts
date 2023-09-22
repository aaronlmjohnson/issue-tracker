#! /usr/bin/env node

  // Get arguments passed on command line
  import * as dotenv from 'dotenv';
  import * as bcrypt from 'bcryptjs';
  dotenv.config();

  import Project from "./project";
  import User from './user';
  const projects = [];
  const users = [];
  
  import mongoose from "mongoose";
  mongoose.set("strictQuery", false);
    
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    const connectionString = process.env.ATLAS_URI || "";

    main().catch((err) => console.log(err));
    async function main() {
      await mongoose.connect(connectionString);
    }
    console.log("Debug: Should be connected?");
    await createUsers();

    console.log("Debug: Closing mongoose");
    // mongoose.connection.close();
  }

  async function projectCreate(index, title, description, date_created) {
    const project = new Project({ title, description, date_created});
    await project.save();
    projects[index] = project;
    console.log(`Added project: ${title}`);
  }

  async function userCreate(index, username, password, role, date_created) {
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      
      const user = new User({ username, password: hashedPassword, role, date_created});
      await user.save();
      users[index] = user;
      console.log(`Added user: ${username}`);
      // if err, do something
      // otherwise, store hashedPassword in DB
    });
    
  }
  
  
  async function createUsers() {
    console.log("Adding users");
    await Promise.all([
      userCreate(0, "Aaron","password","Administrator", Date.now()),
    ]);
  }

  async function createProjects() {
    console.log("Adding projects");
    await Promise.all([
      projectCreate(0, "Issue Tracker", "An app for tracking bugs and features.", "09-16-2023"),
      projectCreate(1, "Cool Game", "A cool new game.", "03-07-2023"),
      projectCreate(2, "Video Game Display App", "A project that displays video game data from RAWG API", "09-01-2022"),
    ]);
  }
  
 