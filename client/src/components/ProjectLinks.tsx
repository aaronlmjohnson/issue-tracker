import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { Link } from "react-router-dom";

const ProjectLinks = ()=>{
    const {setActiveForm} = useActiveFormContext();
    return(
        <ul>
            <li>
                <Link to={"/projects"}>All</Link>
            </li>
            <li>
                <button onClick={()=>{setActiveForm("create-project")}}>Add</button>
            </li>
        </ul>
    )
}

export default ProjectLinks;