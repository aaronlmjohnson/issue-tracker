#! /usr/bin/env node

  // Get arguments passed on command line
  import * as dotenv from 'dotenv';
  import * as bcrypt from 'bcryptjs';
  dotenv.config();

  import Project from "./project";
  import User from './user';
  import Ticket from './ticket';
  import Comment from './comment';

  const projects: any[] = [];
  const users: any[] = [];
  const tickets: any[] = [];
  const comments: any[] = [];
  
  import mongoose, { Number } from "mongoose";
  mongoose.set("strictQuery", false);
  const connectionString = process.env.ATLAS_URI || "";

  const timeOut = async(ms:any)=>{
    console.log("waiting...");
    return new Promise(r => setTimeout(r, ms));
  }


  main().catch((err) => console.log(err));

  
  async function main() {
    console.log("Debug: About to connect");

    await mongoose.connect(connectionString);
    console.log("Debug: Should be connected?");

    await createUsers();
    //to prevent error of projects being created first
    await timeOut(3000);
    await createProjects();
    await createTickets();
    await createComments();

    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }

  async function userCreate(index, username, password, role, date_created) {
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      
      const user = new User({ username, password: hashedPassword, role, date_created});
      await user.save();
      users[index] = user;
      console.log(`Added user: ${username}`);
    });
  }

  async function projectCreate(index:any, title:String, description:String, date_created:number, project_lead:any, developers_assigned_to:any) {
    const project = new Project({ title, description, date_created, project_lead, developers_assigned_to});
    await project.save();
    projects[index] = project;
    console.log(`Added project: ${title}`);
  }

  async function ticketCreate(index, title, description, project, date_created, author, priority, status, type, assignee){
    const ticket = new Ticket({
      title,
      description,
      project,
      date_created,
      author,
      priority,
      status,
      type,
      assignee,
    });

    await ticket.save();
    tickets[index] = ticket;
    console.log(`Added ticket: ${title}`);
  }

  async function commentCreate(index, author, message, project, date_created, ticket){
    const comment = new Comment({
      author, 
      message,
      project,
      date_created,
      ticket
    });

    await comment.save();
    comments[index] = comment;
    console.log(`Added comment from : ${author.username}`);
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

  async function createTickets(){
    console.log("Adding Tickets");
    await Promise.all([
      ticketCreate(0, "Track Ticket History", "Being able to see the history of all of the changes of a Ticket.", projects[0], Date.now(),
                    users[1], "Medium", "Not Assigned", "Feature", "")
    ]);
  }

  async function createComments(){
    console.log("Adding Comments")
    /*
      author, 
      message,
      project,
      date_created
    */
    await Promise.all([
      commentCreate(0, users[2], "Is anyone available to work on this?", projects[0], Date.now(), tickets[0]),
      commentCreate(1, users[1], "I'm already working on a ticket.", projects[0], Date.now(), tickets[0]),
      commentCreate(2, users[3], "I'm available to work on it.", projects[0], Date.now(), tickets[0])
    ])
  }
  
 