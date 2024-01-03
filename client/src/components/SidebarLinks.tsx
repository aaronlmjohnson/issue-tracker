
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink';

const SidebarLinks = ()=>{        
    return(
        <ul className="flex flex-col my-16 px-4">
            <SidebarLink 
                icon = {faHouse}
                section = {"Dashboard"}
                dropdown = {
                    [
                        {name:"Home", link:"/"}
                    ]
                }
            />
            <SidebarLink 
                icon = {faUser}
                section = {"Accounts"}
                dropdown = {
                    [
                        {name:"All Accounts", link:"/users"},
                    ]
                }
            />
            <SidebarLink 
                icon = {faDiagramProject}
                section = {"Projects"}
                dropdown = {
                    [
                        {name:"All Projects", link:"/projects"},
                        {name:"Add Project", link:"/projects/create"}
                    ]
                }
            />
            <SidebarLink 
                icon = {faClipboardList}
                section = {"Tickets"}
                dropdown = {
                    [
                        {name:"All Tickets", link:"/tickets"}
                    ]
                }
            />
            
        </ul>
    );
}

export default SidebarLinks