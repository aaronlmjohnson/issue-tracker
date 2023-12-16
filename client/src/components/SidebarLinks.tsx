import { Link } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";

interface ISidebarLinksProps{
    section: string
}

const SidebarLinks = (props:ISidebarLinksProps)=>{
    const {setActiveForm} = useActiveFormContext();
    const ProjectLinks = ()=>{
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
    
    return(
        <div>
            <ProjectLinks />
        </div>
    );
}

export default SidebarLinks