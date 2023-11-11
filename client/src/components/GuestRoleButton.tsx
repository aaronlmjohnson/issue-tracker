import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

const GuestRoleButton = (props:any)=>{
    let role = null;
    if(props.roleName === "Administrato") role = faUserShield;
    if(props.roleName === "Project Lead") role = faUserTie;
    else role = faUserCog;
    const adminIcon = <FontAwesomeIcon icon={role} className="text-white" size="xl"/>

    return (
        <button 
                className="h-24 font-secondary font-bold text-white text-3xl bg-primary rounded"
                onClick={props.setter} 
                value={props.roleName} 
        >
            {adminIcon}{props.roleName}
        </button>
    );
}

export default GuestRoleButton;