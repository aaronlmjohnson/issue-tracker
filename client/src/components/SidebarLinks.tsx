import ProjectLinks from "./ProjectLinks";
import UserLinks from "./UserLinks";
import TicketLinks from "./TicketLinks";

interface ISidebarLinksProps{
    section: string
}

const SidebarLinks = (props:ISidebarLinksProps)=>{        
    return(
        <div className="px-3">
            {props.section === "Projects" && <ProjectLinks />}
            {props.section === "Users" && <UserLinks />}
            {props.section === "Tickets" && <TicketLinks />}
        </div>
    );
}

export default SidebarLinks