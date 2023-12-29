import ProjectLinks from "./ProjectLinks";
import UserLinks from "./UserLinks";
import TicketLinks from "./TicketLinks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const SidebarLinks = ()=>{        
    const home = <FontAwesomeIcon icon={faHouse} className="text-white text-2xl"/>
    const usersIcon = <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
    const projectsIcon = <FontAwesomeIcon icon={faDiagramProject} className="text-white text-2xl"/>
    const ticketsIcon = <FontAwesomeIcon icon={faClipboardList} className="text-white text-2xl"/>
    
    return(
        <div className="flex flex-col items-center my-16">
            <p className="text-[20px] font-bold">
                <Link to={"/"}> {home} Dashboard </Link>
            </p>
            
        </div>
    );
}

export default SidebarLinks