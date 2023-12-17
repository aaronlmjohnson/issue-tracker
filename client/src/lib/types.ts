export interface IProject {
    kind:"project",
    _id: string,
    title: string,
    description: string,
    date_created: string,
    project_lead:string,
    developers_assigned_to: string[]
}

export interface IUser {
    kind:"user",
    _id: string,
    email: string,
    first_name: string,
    last_name: string,
    role: string,
    date_created: string,
    url: string,
    fullName: string,
    roles: string[]

}

export interface ITicket {
    kind:"ticket",
    _id: string,
    title: string,
    description: string,
    project: IProject,
    author: IUser,
    date_created: string,
    priority: string,
    status: string,
    type: string,
    assignee: string | null,
    comments: []

}

export type TFormObject = IProject | ITicket;
