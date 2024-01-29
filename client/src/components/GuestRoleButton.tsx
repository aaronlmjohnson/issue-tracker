import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

const GuestRoleButton = (props:any)=>{
    let role = null;
    if(props.roleName === "Administrator") role = faUserShield;
    else if(props.roleName === "Project_Lead") role = faUserTie;
    else role = faUserCog;


    const adminIcon = <FontAwesomeIcon icon={role} className="text-white" size="xl" onClick={(e)=> props.setter(e, "role", "role name")}/>

    return (
        <button 
                className={`h-24 font-secondary font-bold text-white text-3xl ${props.isSelected ? "bg-primary-selected" :"bg-primary"} rounded`}
                onClick={props.setter} 
                value={props.roleName} 
        >
            {adminIcon}{props.roleName.split("_").join(" ")}
        </button>
    );
}

export default GuestRoleButton;