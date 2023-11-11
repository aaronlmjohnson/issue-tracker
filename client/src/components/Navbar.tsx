import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = ()=>{
    const hamburgerIcon = <FontAwesomeIcon icon={faBars} className="text-primary text-4xl"/>
    const userPortrait = <FontAwesomeIcon icon={faCircleUser} className="text-primary text-4xl"/>
    const {user} = useAuthContext();
    console.log(user);
    return( 
        <nav className="flex border border-x-0 border-t-0 px-7 py-3 place-content-between">
            <div>
                {hamburgerIcon}
            </div>
            <div className="flex gap-x-[10px]">
                {userPortrait}
                <div>
                    <h3>{user.user.role}</h3>
                    <h4 className="font-bold">{user.user.fullName}</h4>
                </div>
            </div>
        </nav>
    );
}   

export default Navbar