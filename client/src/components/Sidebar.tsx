import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import SidebarLinks from './SidebarLinks';

const Sidebar = (props:any)=>{
    const home = <FontAwesomeIcon icon={faHouse} className="text-white text-2xl"/>
    const usersIcon = <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
    const projectsIcon = <FontAwesomeIcon icon={faDiagramProject} className="text-white text-2xl"/>
    const ticketsIcon = <FontAwesomeIcon icon={faClipboardList} className="text-white text-2xl"/>

    const logo = <FontAwesomeIcon icon={faBug} className="flex rotate-45 text-white logo"/>
    return(
        <nav className="flex flex-col bg-primary text-white p-5">
            {/* <div className="bg-primary w-16 flex h-screen flex-col gap-y-16">
                <div className="mx-auto my-6">
                    {logo}
                </div>
                <ul className="flex flex-col mx-auto gap-y-20">
                    <li key={uuid()}><a href="/">{home}</a></li>
                    <li key={uuid()}><a href="/users">{usersIcon}</a></li>
                    <li key={uuid()}><a href="/projects">{projectsIcon}</a></li>
                    <li key={uuid()}><a href="/tickets">{ticketsIcon}</a></li>
                </ul>

            </div> */}
            {/* add media query for logo */}
                    <div className="flex gap-3 items-center justify-center sm:text-4xl logo"> 
                        {logo}
                        <h1 className=" font-secondary logo font-bold sm:block hidden">Tracker</h1>
                    </div>
                
                    <div className="pt-12">
                        <h2 className="text-[20px] font-bold">{props.section}</h2>
                        <SidebarLinks  section={props.section}/>
                    </div>

        </nav>  
    )
}
export default Sidebar;