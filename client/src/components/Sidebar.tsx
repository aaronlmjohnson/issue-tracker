import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import SidebarLinks from './SidebarLinks';
import Dashboard from '../pages/Dashboard';

const Sidebar = (props:any)=>{
    const logo = <FontAwesomeIcon icon={faBug} className="flex rotate-45 text-white logo"/>
    return(
        <nav className="flex flex-col bg-primary text-white p-5 sticky h-screen top-0">
            <div className="flex gap-3 items-center justify-center sm:text-4xl logo"> 
                {logo}
                <h1 className=" font-secondary logo font-bold sm:block hidden">Tracker</h1>
            </div>
            <SidebarLinks />
        </nav>  
    )
}
export default Sidebar;