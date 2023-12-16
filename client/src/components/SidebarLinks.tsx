import { Link } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import ProjectLinks from "./ProjectLinks";
import UserLinks from "./UserLinks";
import TicketLinks from "./TicketLinks";

interface ISidebarLinksProps{
    section: string
}

const SidebarLinks = (props:ISidebarLinksProps)=>{
    const {setActiveForm} = useActiveFormContext();
        
    return(
        <div>
            {props.section === "Projects" && <ProjectLinks />}
            {props.section === "Users" && <UserLinks />}
            {props.section === "Tickets" && <TicketLinks />}
        </div>
    );
}

export default SidebarLinks