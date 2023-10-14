import ProjectUpdateButton from "../components/ProjectUpdateButton";
import useProjectInfo from "../hooks/useProjectInfo";
import { useEffect, useState } from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import CreateProjectForm from "./CreateProjectForm";

const ProjectPage = ()=>{
    const {project, loading} = useProjectInfo();
    const {leads, developers, loading:usersLoading} = useUserInfo();
    const [formActive, setFormActive] = useState(false);

    const handleUpdateButton = ()=>{
        setFormActive((prevState:any)=>{
            return prevState ? false : true;
        });
    }

    const getLeadName = ()=>{
        if(leads === null || project === null) return;  
        return leads && leads.filter((lead:any)=> {
            return lead._id === project.project_lead;
        })[0].username;
    }

    const getDeveloperNames = ()=>{
        const filteredDevs = developers.filter((developer: any)=>{
            return project.developers_assigned_to.includes(developer._id);
        })
        const devNames = filteredDevs.map((developer:any )=> developer && developer.username);
        return devNames;
    }
    return (
        !loading && !usersLoading&& <div className="project-landing-page ">
            <p className="project-title">{project.title}</p>
            <p className="project-description">{project.description}</p>
            <p className="project-date-created">Started on: {project.date_created}</p>
            <p className="project-date-created">Project Lead: {getLeadName()}</p>
            <p>Developers:</p>
            {getDeveloperNames().map((name:string)=>{
                return(<p className="developer-name" key={crypto.randomUUID()}>{name}</p>)
            })}
            <ProjectUpdateButton  handleUpdateButton={handleUpdateButton}/>
            { formActive && <CreateProjectForm update={true} project={project} setFormActive={setFormActive} formActive={formActive}/>} 
        </div>
    );
}

export default ProjectPage;

