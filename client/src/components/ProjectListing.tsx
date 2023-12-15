import ProjectDeleteButton from "../hooks/ProjectDeleteButton";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import useProjectUpdateButton from "../hooks/useProjectUpdateButton";
import { useEffect } from "react";
import date from 'date-and-time';

const ProjectListing = (props:any)=>{
    const { project } = props;
    const { updateButton, cancelButton} = useProjectUpdateButton();
    const url = `http://localhost:3001/projects/${project._id}/delete`;
    const { display:showDeleteConfirmation, setDisplay, confirmationForm} = useDeleteConfirmation(url, project);
    const {isAuthed, isAuthedToEditProject} = useCheckAuthorization();

    useEffect(()=>{
        isAuthedToEditProject(project);
        props.setActiveProject((prevState:any)=> project);
        props.setToggleUpdate((prevState: any)=> prevState ? false : true);
        if(props.toggleUpdate) props.setToggleCreate(false);
    }, []);

    const alterationButtons = ()=>{
        return (
            <div className="flex gap-x-2">
                {updateButton()}
                <ProjectDeleteButton project = {project} setDisplay={setDisplay}/>
            </div>
        )
    }

    return(
        <div className="flex flex-col gap-y-2">
            <div className="flex justify-between">
                <h1 className="font-secondary text-2xl font-semibold"><a href={`/projects/${project._id}`}>{project.title}</a></h1>
                <p className="text-non-focus">{date.format(new Date(project.date_created), "ddd MMM DD, YYYY")}</p>
            </div>  
            <p>{project.description}</p>
            {isAuthed && alterationButtons()}
            {showDeleteConfirmation && confirmationForm()}
        </div>
    )
}

export default ProjectListing;