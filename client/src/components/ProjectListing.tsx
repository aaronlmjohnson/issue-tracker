import ProjectDeleteButton from "../hooks/ProjectDeleteButton";

const ProjectListing = (props:any)=>{
    const { project } = props;
    return(
        <div className="project-listing">
            <h1><a href={`/projects/${project._id}`}>{project.title}</a></h1>
            <p>{project.date_created}</p>
            <p>{project.description}</p>
            <ProjectDeleteButton project = {project}/>
        </div>
    )
}

export default ProjectListing;