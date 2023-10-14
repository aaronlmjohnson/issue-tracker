import { useState } from "react"
import CreateProjectForm from "../pages/CreateProjectForm"

const ProjectUpdateButton = (props:any)=>{

    return(
        <>
            <button className="project-update-button"onClick={props.handleUpdateButton}> {props.active ? "Cancel" : "Update"}</button>
        </>
    )
}

export default ProjectUpdateButton;