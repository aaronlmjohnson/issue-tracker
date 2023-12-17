export interface TProject {
    _id: string,
    title: string,
    description: string,
    date_created: string,
    project_lead:string,
    developers_assigned_to: string[]
}

export interface TUser {
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

export interface TTicket {
    _id: string,
    title: string,
    description: string,
    project: TProject,
    author: TUser,
    date_created: string,
    priority: string,
    status: string,
    type: string,
    assignee: string | null,
    comments: []

}
