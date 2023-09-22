#! /usr/bin/env node

  // Get arguments passed on command line
  import * as dotenv from 'dotenv';
  import * as bcrypt from 'bcryptjs';
  dotenv.config();

  import Project from "./project";
  import User from './user';
  const projects = [];
  const users: any[] = [];
  
  import mongoose, { Number } from "mongoose";
  mongoose.set("strictQuery", false);
    const connectionString = process.env.ATLAS_URI || "";

  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");

    await mongoose.connect(connectionString);
    console.log("Debug: Should be connected?");

    await createUsers();
    await createProjects();

    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }

  async function projectCreate(index:any, title:String, description:String, date_created:number, project_lead:any, developers_assigned_to:any) {
    const project = new Project({ title, description, date_created, project_lead, developers_assigned_to});
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
      userCreate(1, "DeveloperBob","password","Developer", Date.now()),
      userCreate(2, "ProjectLeadSue","password","Project Lead", Date.now()),
      userCreate(3, "DeveloperMike","password","Developer", Date.now()),
    ]);
  }

  async function createProjects() {
    const lead = await User.findOne({role: "Project Lead"}).exec();
    await projectCreate(0, "Issue Tracker", "An app for tracking bugs and features.", Date.now(), users[2], [users[1], users[3]]);
  }
  
 