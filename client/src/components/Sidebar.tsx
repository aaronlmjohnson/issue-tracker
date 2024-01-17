import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import SidebarLinks from './SidebarLinks';

const Sidebar = (props:any)=>{
    const logo = <FontAwesomeIcon icon={faBug} className="flex rotate-45 text-white"/>

    const handleResize = ()=>{

    }
    
    return(
        <nav className={`${props.sidebarVisible ? " hidden sm:block" : " sm:hidden block"} bg-primary text-white p-5 sm:sticky fixed  h-screen top-0 z-40`}>
            <div className="flex gap-3 items-center justify-center text-4xl"> 
                {logo}
                <h1 className=" font-secondary font-bold">Tracker</h1>
            </div>
            <SidebarLinks />
        </nav>  
    )
}
export default Sidebar;


//