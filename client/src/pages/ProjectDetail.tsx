import useProjectInfo from "../hooks/useProjectInfo";
import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { useUserInfo } from "../hooks/useUserInfo";
import DeleteButton from "../components/DeleteButton";
import AllProjectTickets from "../components/AllProjectTickets";
import TicketForm from "../components/TicketForm";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import UpdateButton from "../components/UpdateButton";
import SubmitButton from "../components/SubmitButton";
import FormButton from "../components/FormButton";

const ProjectPage = ()=>{
    const {project, loading} = useProjectInfo();
    
    const {developers, loading:usersLoading} = useUserInfo();
    const {data:lead, loading:leadLoading} = useFetchData(`http://localhost:3001/users/${project.project_lead}`);//should be populated in project
    const [toggleTickets, setToggleTickets] = useState(false);
    const url = `http://localhost:3001/projects/${project._id}/delete`;
    
    const {isAuthed, isLeadOfProject} = useCheckAuthorization();
    const {isAuthed:canMakeTicket, isAuthedToMakeTicket} =  useCheckAuthorization();

    useEffect(()=>{
        if(!loading){
            isLeadOfProject(project.project_lead);
            isAuthedToMakeTicket(project);
            console.log(project);
        } 
        
    },[loading])
    
    const getDeveloperNames = ()=>{
        const filteredDevs = developers.filter((developer: any)=>{
            return project.developers_assigned_to.includes(developer._id);
        })
        const devNames = filteredDevs.map((developer:any )=> developer && developer.fullName);
        return devNames;
    }

    const handleTicketsDisplay = (e:React.MouseEvent<HTMLElement>)=>{
        console.log("hi")
        setToggleTickets((prevState)=> prevState ? false : true);
    }

    const alterationButtons = ()=>{

        return (
            <>
                <UpdateButton 
                    formObj  = {project}
                    formName= {"update-project"}
                />
                <DeleteButton obj = {project} url={`http://localhost:3001/projects/${project._id}/delete`}/>
            </>
        )
    }
    
    return (
        !loading && !usersLoading&& <div className="project-landing-page ">
            <h1 className="project-title">{project.title}</h1>
            <div>
                <p>Created By</p>
                <p>{project.author}</p>
            </div>
            <p className="project-description">{project.description}</p>
            <p className="project-date-created">Started on: {project.date_created}</p>
            <p className="project-date-created">Project Lead: {lead.fullName}</p>
            <p>Developers:</p>
            {getDeveloperNames().map((name:string)=>{
                return(<p className="developer-name" key={crypto.randomUUID()}>{name}</p>)
            })}
            {isAuthed && alterationButtons()}
            <FormButton content={toggleTickets ? "Hide Tickets" : "View Tickets"} handler={handleTicketsDisplay} />
            {/* {canMakeTicket && <TicketForm project={project}/>} */}
            {toggleTickets && <AllProjectTickets project = {project} />} 
        </div>
    );
}

export default ProjectPage;

