import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import DeleteButton from "../components/DeleteButton";
import AllProjectTickets from "../components/AllProjectTickets";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import UpdateButton from "../components/UpdateButton";
import FormButton from "../components/FormButton";
import { useParams } from "react-router-dom";
import ContentLoading from "./ContentLoading";

const ProjectPage = ()=>{
    const { projectId } = useParams();
    const [toggleTickets, setToggleTickets] = useState(false);

    const {data:project, loading:projectLoading } = useFetchData(`http://localhost:3001/projects/${projectId}`);
    const {isAuthed, isLeadOfProject} = useCheckAuthorization();
    const {isAuthed:canMakeTicket, isAuthedToMakeTicket} =  useCheckAuthorization();

    useEffect(()=>{
        if(!projectLoading){
            isLeadOfProject(project.project_lead);
            isAuthedToMakeTicket(project);
        } 
        
    },[projectLoading])
    

    const handleTicketsDisplay = (e:React.MouseEvent<HTMLElement>)=>{
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
        projectLoading ?
        <ContentLoading backgroundColor="bg-white" /> :
        <div className="project-landing-page ">
            {!project.author && !project.project_lead?
                <>Loading Content</> :
            <>
                <h1 className="project-title">{project.title}</h1>
                
                <div>
                    <p>Created By</p>
                    <p>{project.author.fullName}</p>
                </div>
                
                <p className="project-description">{project.description}</p>
                <p className="project-date-created">Started on: {project.date_created}</p>
                <p className="project-date-created">Project Lead: {project.project_lead.fullName}</p>
                
                <p>Developers:</p>
                {project.developers_assigned_to.map((developer:any)=>{
                    return(<p className="developer-name" key={crypto.randomUUID()}>{developer.fullName}</p>)
                })}
                {isAuthed && alterationButtons()}
                <FormButton content={toggleTickets ? "Hide Tickets" : "View Tickets"} handler={handleTicketsDisplay} />
                {/* {canMakeTicket && <TicketForm project={project}/>} */}
                {toggleTickets && <AllProjectTickets project = {project} />}  
            </>}
        </div>
    );
}

export default ProjectPage;

