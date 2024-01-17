
import { faHouse, faUser, faDiagramProject, faClipboardList, faBug } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink';
import { Link } from 'react-router-dom';
import CreateButton from './CreateButton';

const SidebarLinks = ()=>{        
    return(
        <ul className="flex flex-col my-16 px-4">
            <SidebarLink 
                icon = {faHouse}
                section = {"Dashboard"}
                dropdown = {
                    [
                        <Link to={"/"} key={crypto.randomUUID()}>{"Home"}</Link>
                    ]
                }
            />
            <SidebarLink 
                icon = {faUser}
                section = {"Accounts"}
                dropdown = {
                    [
                        <Link to={"/users"} key={crypto.randomUUID()}>{"All Accounts"}</Link>
                    ]
                }
            />
            <SidebarLink 
                icon = {faDiagramProject}
                section = {"Projects"}
                dropdown = {
                    [
                        <Link to={"/projects"} key={crypto.randomUUID()}>{"All Projects"}</Link>,
                        <CreateButton
                            key={crypto.randomUUID()}
                            formName={"create-project"}
                            buttonText={"New Project"}
                        /> 
                    ]
                }
            />
            <SidebarLink 
                icon = {faClipboardList}
                section = {"Tickets"}
                dropdown = {
                    [
                        <Link to={"/tickets"}
                        key={crypto.randomUUID()}>{"All Tickets"}</Link>,
                        
                    ]
                }
            />
            
        </ul>
    );
}

export default SidebarLinks