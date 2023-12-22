import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../hooks/useAuthContext';
import DropdownMenu from './DropdownMenu';
import { useEffect } from 'react';

const Navbar = (props:any)=>{
    const hamburgerIcon = <FontAwesomeIcon icon={faBars} className="text-primary text-4xl"/>
    const userPortrait = <FontAwesomeIcon icon={faCircleUser} className="text-primary text-4xl"/>
    const {user, loading} = useAuthContext();
    
    return( 
        !loading && <nav className="sticky top-0 bg-white">
            <div className="flex border border-x-0 border-t-0 px-7 py-3 place-content-between">
                <div className="my-auto" onClick={()=> props.setSidebarVisible((prevState:boolean)=> prevState ? false : true)}>
                    {hamburgerIcon}
                </div>
                <div className="flex gap-x-[10px] h-full relative group">
                    <div className="flex items-center">
                        {userPortrait}
                    </div>
                
                    { user ?   
                        <div >
                            <h3>{user.user.role}</h3>
                            <h4 className="font-bold">{user.user.fullName}</h4>
                        </div>
                    :
                        <div>
                            <p><a href="/login">Sign in</a></p>
                            <p><a href="/sign-up">Sign Up</a></p>
                        </div>
                    }
                    <DropdownMenu  id={user.user.id}/>
                </div>
            </div>
        </nav>
    );
}   

export default Navbar;
