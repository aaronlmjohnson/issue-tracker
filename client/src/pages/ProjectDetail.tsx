import useProjectUpdateButton from "../hooks/useProjectUpdateButton";
import useProjectInfo from "../hooks/useProjectInfo";
import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useUserInfo } from "../hooks/useUserInfo";
import ProjectForm from "./ProjectForm";
import ProjectDeleteButton from "../hooks/ProjectDeleteButton";
import AllProjectTickets from "../components/AllProjectTickets";
import TicketForm from "../components/TicketForm";
import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import UpdateButton from "../components/UpdateButton";

const ProjectPage = ()=>{
    const {project, loading} = useProjectInfo();
    const {developers, loading:usersLoading} = useUserInfo();
    const {data:lead, loading:leadLoading} = useFetchData(`http://localhost:3001/users/${project.project_lead}`);
    // const {updateButton, cancelButton, setFormActive, formActive} = useProjectUpdateButton();
    const [toggleTickets, setToggleTickets] = useState(false);//This will be handled in a navbar component in the future
    const url = `http://localhost:3001/projects/${project._id}/delete`;
    const { display:showDeleteConfirmation, setDisplay, confirmationForm} = useDeleteConfirmation(url, project);
    const {isAuthed, isLeadOfProject} = useCheckAuthorization();
    const {isAuthed:canMakeTicket, isAuthedToMakeTicket} =  useCheckAuthorization();

    useEffect(()=>{
        if(!loading){
            isLeadOfProject(project.project_lead);
            isAuthedToMakeTicket(project);
        } 
        
    },[loading])
    
    const getDeveloperNames = ()=>{
        const filteredDevs = developers.filter((developer: any)=>{
            return project.developers_assigned_to.includes(developer._id);
        })
        const devNames = filteredDevs.map((developer:any )=> developer && developer.fullName);
        return devNames;
    }

    const handleTicketsPage = ()=>{
        setToggleTickets((prevState)=> prevState ? false : true);
    }

    const alterationButtons = ()=>{

        return (
            <>
                <UpdateButton 
                    formObj  = {project}
                    formName= {"update-project"}
                />
                <ProjectDeleteButton project = {project} setDisplay={setDisplay}/>
            </>
        )
    }
    
    return (
        !loading && !usersLoading&& <div className="project-landing-page ">
            <p className="project-title">{project.title}</p>
            <p className="project-description">{project.description}</p>
            <p className="project-date-created">Started on: {project.date_created}</p>
            <p className="project-date-created">Project Lead: {lead.fullName}</p>
            <p>Developers:</p>
            {getDeveloperNames().map((name:string)=>{
                return(<p className="developer-name" key={crypto.randomUUID()}>{name}</p>)
            })}
            {isAuthed && alterationButtons()}
            {showDeleteConfirmation && confirmationForm()}
            <button onClick={handleTicketsPage}>tickets</button>
            {/* {formActive && <ProjectForm project={project || null}/>}  */}
            {canMakeTicket && <TicketForm project={project}/>}
            {toggleTickets && <AllProjectTickets project = {project} />} 
        </div>
    );
}

export default ProjectPage;

