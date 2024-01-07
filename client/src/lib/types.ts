export interface IProject {
    type:"project";
    _id: string;
    title: string;
    description: string;
    date_created: string;
    project_lead:string;
    developers_assigned_to: string[];
}

export interface IUser {
    type:"user";
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    date_created: string;
    url: string;
    fullName: string;
    roles: string[];

}

export type ITicket = {
    type:"ticket";
    _id: string;
    title: string;
    description: string;
    project: IProject;
    author: IUser;
    date_created: string;
    priority: string;
    status: string;
    ticketType: string;
    assignee: string | null;
    comments: [];

}

export type TFormObject = IProject | ITicket | IUser;
