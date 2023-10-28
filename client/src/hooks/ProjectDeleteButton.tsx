 const ProjectDeleteButton = (props:any)=> {
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
