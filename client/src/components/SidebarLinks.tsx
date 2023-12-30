
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink';

const SidebarLinks = ()=>{        
    return(
        <ul className="flex flex-col my-16 px-4">
            <SidebarLink 
                icon = {faHouse}
                section = {"Dashboard"}
            />
            <SidebarLink 
                icon = {faUser}
                section = {"Accounts"}
            />
            <SidebarLink 
                icon = {faDiagramProject}
                section = {"Projects"}
            />
            <SidebarLink 
                icon = {faClipboardList}
                section = {"Tickets"}
            />
            
        </ul>
    );
}

export default SidebarLinks