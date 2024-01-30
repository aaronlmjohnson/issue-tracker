import DeleteButton from "./DeleteButton";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import { useEffect } from "react";
import date from 'date-and-time';
import UpdateButton from "./UpdateButton";

const ProjectListing = (props:any)=>{
    const { project } = props;
    const {isAuthed, isAuthor} = useCheckAuthorization();

    useEffect(()=>{
        isAuthor(project);
    }, []);

    const alterationButtons = ()=>{
        return (
            <div className="flex gap-x-2">
                <UpdateButton formName={"update-project"} formObj={project}/>
                <DeleteButton 
                    obj = {project}
                    url={`/projects/${project._id}/delete`}
                />
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
        </div>
    )
}

export default ProjectListing;