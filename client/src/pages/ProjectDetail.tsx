import { useState, useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import DeleteButton from "../components/DeleteButton";
import AllProjectTickets from "../components/AllProjectTickets";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import UpdateButton from "../components/UpdateButton";
import FormButton from "../components/FormButton";
import { Outlet, useParams } from "react-router-dom";
import ContentLoading from "./ContentLoading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserTie, faUserCog, faUserShield} from '@fortawesome/free-solid-svg-icons';
import date from "date-and-time";
import { Link } from "react-router-dom";
import { ActiveFormContext } from "../context/ActiveFormContext";
import { useActiveFormContext } from "../hooks/useActiveFormContext";

const ProjectPage = ()=>{
    const { projectId } = useParams();
    const [toggleTickets, setToggleTickets] = useState(false);

    const {data:project, loading:projectLoading } = useFetchData(`/projects/${projectId}`);
    const {isAuthed, isLeadOfProject} = useCheckAuthorization();
    const {isAuthed:canMakeTicket, isAuthedToMakeTicket} =  useCheckAuthorization();
    const userPortraitStyle = "text-[80px] text-primary";
    const { activeDetail } = useActiveFormContext();

    useEffect(()=>{
        if(!projectLoading){
            isLeadOfProject(project.project_lead);
            isAuthedToMakeTicket(project);
        } 
        
    },[projectLoading])

    interface IUserPortraits {
        Administrator: JSX.Element,
        Project_Lead: JSX.Element,
        Developer: JSX.Element
    }

    const userPortraits:IUserPortraits = {
        Administrator: <FontAwesomeIcon icon={faUserShield} className={userPortraitStyle}/>,
        Project_Lead: <FontAwesomeIcon icon={faUserTie} className={userPortraitStyle}/>,
        Developer: <FontAwesomeIcon icon={faUserCog} className={userPortraitStyle}/>,
    }

    const handleTicketsDisplay = (e:React.MouseEvent<HTMLElement>)=>{
        setToggleTickets((prevState)=> prevState ? false : true);
    }

    const alterationButtons = ()=>{

        return (
            <div className="flex flex-col gap-2">
                <h2 className="flex flex-col font-secondary text-2xl font-bold">Options</h2>
                <div className="flex flex-row gap-2">
                    <FormButton content={toggleTickets ? "Hide Tickets" : "View Tickets"} handler={handleTicketsDisplay} />
                    <UpdateButton 
                        formObj  = {project}
                        formName= {"update-project"}
                    />
                    <DeleteButton obj = {project} url={`/projects/${project._id}/delete`}/>
                </div>
            </div>
        )
    }
    <p className="project-date-created">{project.date_created}</p>

    return (
        projectLoading ?
        <ContentLoading backgroundColor="bg-white" /> : //24 headers DM Sans Bold 16 Reg DM Sans gap-3
        <div className="flex  flex-col gap-8 p-7">
            {!project.author && !project.project_lead?
            <>Loading Content</> :
            <>
                <h1 className="font-primary text-5xl font-extrabold">{project.title}</h1>
                
                <div className="flex  flex-col gap-2">
                    <h2 className="flex flex-col font-secondary text-2xl font-bold">Created By</h2>
                    <p className="font-secondary">{project.author.fullName}</p>
                </div>
                <div className="flex  flex-col gap-2">
                    <h2 className="flex flex-col font-secondary text-2xl font-bold">Started On</h2>
                    <p className="project-date-created">{date.format( new Date(project.date_created), 'MMMM DD, YYYY')}</p>
                </div>
                <div className="flex  flex-col gap-2">
                    <h2 className="flex flex-col font-secondary text-2xl font-bold">Overview</h2>
                    <p className="font-secondary">{project.description}</p>
                </div>
                <div className="flex  flex-col gap-2">
                    <h2 className="flex flex-col font-secondary text-2xl font-bold">Team</h2>
                    <div className="grid xl:grid-cols-five lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:justify-between  justify-center">
                        <div className="text-center">
                            <Link to={project.project_lead.url} >
                                {userPortraits["Project_Lead"]}
                                <h1 className="text-2xl font-semibold">{project.project_lead.fullName}</h1>
                                <p className="text-base font-semibold">{project.project_lead.role.split('_').join(' ')}</p>
                            </Link>
                        </div>
                        {project.developers_assigned_to.map((developer:any)=>{
                            return(
                                <Link to={project.project_lead.url} key={crypto.randomUUID()}>
                                    <div className="text-center">
                                        {userPortraits["Developer"]}
                                        <h1 className="text-2xl font-semibold">{developer.fullName}</h1>
                                        <p className="text-base font-semibold">{developer.role.split('_').join(' ')}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {/* return(<p className="developer-name" key={crypto.randomUUID()}>{developer.fullName}</p>) */}

                {isAuthed && alterationButtons()}
                {/* {canMakeTicket && <TicketForm project={project}/>} */}
                {toggleTickets && <AllProjectTickets project = {project} />} 
                <Outlet context={activeDetail}/> 
            </>}
        </div>
    );
}

export default ProjectPage;

