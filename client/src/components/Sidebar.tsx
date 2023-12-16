import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from "./SidebarLink";
import { v4 as uuid } from 'uuid';

const Sidebar = (props:any)=>{
    const home = <FontAwesomeIcon icon={faHouse} className="text-white text-2xl"/>
    const usersIcon = <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
    const projectsIcon = <FontAwesomeIcon icon={faDiagramProject} className="text-white text-2xl"/>
    const ticketsIcon = <FontAwesomeIcon icon={faClipboardList} className="text-white text-2xl"/>

    const logo = <FontAwesomeIcon icon={faBug} className="rotate-45 text-white text-4xl"/>
    return(
        <nav className="flex sticky bottom-0">
            <div className="bg-primary w-16 flex h-screen flex-col gap-y-16">
                <div className="mx-auto my-6">
                    {logo}
                </div>
                <ul className="flex flex-col mx-auto gap-y-20">
                    <li key={uuid()}><a href="/">{home}</a></li>
                    <li key={uuid()}><a href="/users">{usersIcon}</a></li>
                    <li key={uuid()}><a href="/projects">{projectsIcon}</a></li>
                    <li key={uuid()}><a href="/tickets">{ticketsIcon}</a></li>
                </ul>

            </div>
            <div className={`bg-primary bg-opacity-[.08] w-56 h-full p-6 hidden ${props.sidebarVisible ? 'lg:block' : ''}`}>
                <div className="">
                    <h1 className="text-primary font-secondary text-4xl font-bold">Tracker</h1>
                
                    <div className="pt-12">
                        <h2 className="text-[20px] font-bold">{props.section}</h2>
                        <ul className="flex  flex-col gap-y-5 pl-5">
                            {props.links.map((link:string)=> 
                                <SidebarLink 
                                    name={link} 
                                    url={"/projects"} 
                                    key={uuid()}
                                />
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>  
    )
}
export default Sidebar;