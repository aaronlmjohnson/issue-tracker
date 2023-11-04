import ProjectDeleteButton from "../hooks/ProjectDeleteButton";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import useProjectUpdateButton from "../hooks/useProjectUpdateButton";
import { useEffect } from "react";

const ProjectListing = (props:any)=>{
    const { project } = props;
    const { updateButton, cancelButton, formActive, setFormActive} = useProjectUpdateButton();
    const url = `http://localhost:3001/projects/${project._id}/delete`;
    const { display:showDeleteConfirmation, setDisplay, confirmationForm} = useDeleteConfirmation(url, project);
    const {isAuthed, isAuthedToEditProject} = useCheckAuthorization();

    useEffect(()=>{
        isAuthedToEditProject(project);
        props.setFormActive((prevState:boolean)=> formActive);
        props.setActiveProject((prevState:any)=> project);
        props.setToggleUpdate((prevState: any)=> prevState ? false : true);
        if(props.toggleUpdate) props.setToggleCreate(false);
        //if toggleUpdate true set toggle create to false
    }, [formActive]);

    const alterationButtons = ()=>{
        return (
            <>
                {updateButton()}
                <ProjectDeleteButton project = {project} setDisplay={setDisplay}/>
            </>
        )
    }

    return(
        <div className="project-listing">
            <h1><a href={`/projects/${project._id}`}>{project.title}</a></h1>
            <p>{project.date_created}</p>
            <p>{project.description}</p>
            {isAuthed && alterationButtons()}
            {showDeleteConfirmation && confirmationForm()}
        </div>
    )
}

export default ProjectListing;