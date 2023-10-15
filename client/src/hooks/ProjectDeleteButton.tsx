import { useState } from "react"
import { useFormSubmit } from "./useFormSubmit";



 const ProjectDeleteButton = (props:any)=> {
    const {submitForm} = useFormSubmit();

    const handleDelete = ()=> {
        submitForm(props.project, `http://localhost:3001/projects/${props.project._id}/delete`, "DELETE");
    };

    return(
        <button className="project-delete-button" onClick={handleDelete}>
            Delete
        </button>
    )
}

export default ProjectDeleteButton;
