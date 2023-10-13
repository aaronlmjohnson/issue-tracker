import useProjectInfo from "../hooks/useProjectInfo";
import { useUserInfo } from "../hooks/useUserInfo";

const ProjectPage = ()=>{

    const {project, loading} = useProjectInfo();
    const {leads, developers, loading:usersLoading} = useUserInfo();

    const getLeadName = ()=>{
        return leads.filter((lead:any)=> lead._id === project.project_lead)[0].username;
    }

    const getDeveloperNames = ()=>{
        const filteredDevs = developers.filter((developer: any)=>{
            return project.developers_assigned_to.includes(developer._id);
        })
        const devNames = filteredDevs.map((developer:any )=> developer.username);
        return devNames
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

        </div>
    );
}

export default ProjectPage;

