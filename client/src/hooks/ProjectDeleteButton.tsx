import { useState } from "react"
import { useFormSubmit } from "./useFormSubmit";
import useDeleteConfirmation from "./useDeleteConfirmation";


 const ProjectDeleteButton = (props:any)=> {
    const {submitForm} = useFormSubmit();

    const handleDelete = ()=> {
        props.setDisplay(true);
    };

    return(
        <button className="project-delete-button" onClick={handleDelete}>
            Delete
        </button>
    )
}

export default ProjectDeleteButton;
