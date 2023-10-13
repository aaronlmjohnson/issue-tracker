import CreateProjectForm from "../pages/CreateProjectForm"

const ProjectUpdateButton = ()=>{

    const displayProjectForm = ()=>{
            //need to render form when button is clicked
            return(
                <CreateProjectForm />
            )

    }

    const cancelUpdate = ()=>{

    }

    //make toggle for update/cancel button

    return(
        <button className="project-update-button"onClick={displayProjectForm}> Update</button>
    )
}