import ProjectDeleteButton from "../hooks/ProjectDeleteButton";
import useProjectUpdateButton from "./useProjectUpdateButton";
import { useEffect } from "react";

const ProjectListing = (props:any)=>{
    const { project } = props;
    const { updateButton, cancelButton, formActive, setFormActive} = useProjectUpdateButton();

    useEffect(()=>{
        props.setFormActive((prevState:boolean)=> formActive);
        props.setActiveProject((prevState:any)=> project);
        props.setToggleUpdate((prevState: any)=> prevState ? false : true);
        if(props.toggleUpdate) props.setToggleCreate(false);
        //if toggleUpdate true set toggle create to false
    }, [formActive]);
    return(
        <div className="project-listing">
            <h1><a href={`/projects/${project._id}`}>{project.title}</a></h1>
            <p>{project.date_created}</p>
            <p>{project.description}</p>
            {updateButton()}
            <ProjectDeleteButton project = {project}/>

        </div>
    )
}

export default ProjectListing;