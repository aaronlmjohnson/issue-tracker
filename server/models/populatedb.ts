#! /usr/bin/env node

  // Get arguments passed on command line
  import * as dotenv from 'dotenv';
  dotenv.config();

  import Project from "./project";
  const projects = [];
  
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
    await createProjects();

    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  // We pass the index to the ...Create functions so that, for example,
  // genre[0] will always be the Fantasy genre, regardless of the order
  // in which the elements of promise.all's argument complete.
  async function projectCreate(index, title, description, date_created) {
    const project = new Project({ title, description, date_created});
    await project.save();
    projects[index] = project;
    console.log(`Added project: ${title}`);
  }
  
  
  async function createProjects() {
    console.log("Adding projects");
    await Promise.all([
      projectCreate(0, "Issue Tracker", "An app for tracking bugs and features.", "09-16-2023"),
      projectCreate(1, "Cool Game", "A cool new game.", "03-07-2023"),
      projectCreate(2, "Video Game Display App", "A project that displays video game data from RAWG API", "09-01-2022"),
    ]);
  }
  
 