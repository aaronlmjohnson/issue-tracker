import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../hooks/useAuthContext';
import DropdownMenu from './DropdownMenu';
import { useState } from 'react';

const Navbar = ()=>{
    const hamburgerIcon = <FontAwesomeIcon icon={faBars} className="text-primary text-4xl"/>
    const userPortrait = <FontAwesomeIcon icon={faCircleUser} className="text-primary text-4xl"/>
    const {user, loading} = useAuthContext();

    const [toggleDropdown, setToggleDropdown] = useState("off")

    const dropdownToggle = ()=>{
        setToggleDropdown(prevState => prevState === "on" ? "off" : "on");
    }

    return( 
        !loading && <nav className="relative group">
            <div className="flex border border-x-0 border-t-0 px-7 py-3 place-content-between">
                <div className="my-auto">
                    {hamburgerIcon}
                </div>
                <div>
                    <div className="flex gap-x-[10px] ">
                        <button  onClick={dropdownToggle}className="portrait-button">{userPortrait}</button>
                    
                        { user ?   
                            <div >
                                <h3>{user.user.role}</h3>
                                <button><h4 className="font-bold">{user.user.fullName}</h4></button>
                            </div>
                        :
                            <div>
                                <p><a href="/login">Sign in</a></p>
                                <p><a href="/sign-up">Sign Up</a></p>
                            </div>
                        }
                    </div>

                </div>
            </div>
            <DropdownMenu toggleDropdown={toggleDropdown} id={user.user.id}/>

        </nav>
    );
}   

export default Navbar;


// import { useNavigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";

// const Navbar = ()=>{
//     const { user } = useAuthContext();
//     const { logout } = useLogout();
    
//     return(
//         <nav className="border-b-4 border-t-0 border-x-0  border-black">
//             <p className=""><a href="/dashboard">Home</a></p>
//             <p className=""><a href="/projects">Projects</a></p>
//             <p className=""><a href="/users">Users</a></p>
//             <p className=""><a href="/tickets">Tickets</a></p>
//             {user ? <p>Logged in As: {user.user.fullName}</p> : <></>}
//             {user && <button onClick={logout}>Log out</button>}
//             {!user && <p><a href="/login">Sign in</a></p>}
//             {!user && <p><a href="/sign-up">Sign Up</a></p>}
//         </nav>
//     )
// }

// export default Navbar;