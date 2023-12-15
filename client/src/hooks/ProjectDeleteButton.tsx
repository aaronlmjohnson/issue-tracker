 const ProjectDeleteButton = (props:any)=> {
    const handleDelete = ()=> {
        props.setDisplay(true);
    };

    return(
        <button className="px-4 py-1 border-2 border-delete rounded-lg font-secondary font-bold text-base text-delete" onClick={handleDelete}>
            Delete
        </button>
    )
}

export default ProjectDeleteButton;
