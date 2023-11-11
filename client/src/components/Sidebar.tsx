import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from "./SidebarLink";
import { v4 as uuid } from 'uuid';

const Sidebar = (props:any)=>{
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const home = <FontAwesomeIcon icon={faHouse} className="text-white text-2xl"/>
    const usersIcon = <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
    const projectsIcon = <FontAwesomeIcon icon={faDiagramProject} className="text-white text-2xl"/>
    const ticketsIcon = <FontAwesomeIcon icon={faClipboardList} className="text-white text-2xl"/>

    const logo = <FontAwesomeIcon icon={faBug} className="rotate-45 text-white text-4xl"/>
    return(
        <div className="flex">
            <nav className="bg-primary w-16 h-screen flex flex-col gap-y-16">
                <div className="mx-auto my-6">
                    {logo}
                </div>
                <div className="flex flex-col mx-auto gap-y-20">
                    {home}
                    {usersIcon}
                    {projectsIcon}
                    {ticketsIcon}
                </div>

            </nav>
            <nav className="bg-primary bg-opacity-[.08] w-56 h-screen p-6">
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

            </nav>
        </div>  
    )
}

  /* <p className=""><a href="/dashboard">Home</a></p>
                <p className=""><a href="/projects">Projects</a></p>
                <p className=""><a href="/users">Users</a></p>
                <p className=""><a href="/tickets">Tickets</a></p>
                {user ? <p>Logged in As: {user.user.fullName}</p> : <></>}
                {user && <button onClick={logout}>Log out</button>}
                {!user && <p><a href="/login">Sign in</a></p>}
                {!user && <p><a href="/sign-up">Sign Up</a></p>} */

export default Sidebar;