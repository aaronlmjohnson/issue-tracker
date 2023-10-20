import useProjectUpdateButton from "../components/useProjectUpdateButton";
import useProjectInfo from "../hooks/useProjectInfo";
import { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useUserInfo } from "../hooks/useUserInfo";
import ProjectForm from "./ProjectForm";
import ProjectDeleteButton from "../hooks/ProjectDeleteButton";
import AllProjectTickets from "../components/AllProjectTickets";

const ProjectPage = ()=>{
    const {project, loading} = useProjectInfo();
    const {developers, loading:usersLoading} = useUserInfo();
    const {data:lead, loading:leadLoading} = useFetchData(`http://localhost:3001/users/${project.project_lead}`);
    const {updateButton, cancelButton, setFormActive, formActive} = useProjectUpdateButton();
    const [toggleTickets, setToggleTickets] = useState(false);//This will be handled in a navbar component in the future

    const getDeveloperNames = ()=>{
        const filteredDevs = developers.filter((developer: any)=>{
            return project.developers_assigned_to.includes(developer._id);
        })
        const devNames = filteredDevs.map((developer:any )=> developer && developer.username);
        return devNames;
    }

    const handleTicketsPage = ()=>{
        setToggleTickets((prevState)=> prevState ? false : true);
    }
    
    return (
        !loading && !usersLoading&& <div className="project-landing-page ">
            <p className="project-title">{project.title}</p>
            <p className="project-description">{project.description}</p>
            <p className="project-date-created">Started on: {project.date_created}</p>
            <p className="project-date-created">Project Lead: {lead.username}</p>
            <p>Developers:</p>
            {getDeveloperNames().map((name:string)=>{
                return(<p className="developer-name" key={crypto.randomUUID()}>{name}</p>)
            })}
            {formActive ? cancelButton() : updateButton()}
            <ProjectDeleteButton project = {project} />
            <button onClick={handleTicketsPage}>tickets</button>
            {formActive && <ProjectForm project={project || null}/>} 
            {toggleTickets && <AllProjectTickets project = {project} />} 
        </div>
    );
}

export default ProjectPage;

