import { useLogout } from "../hooks/useLogout";


const DropdownMenu = (props:any)=>{

    const {logout} = useLogout();
    const menuVariant:any = {
        on: 'absolute border border-black  border-t-0 z-10 bg-white right-[28px] px-4',
        off: 'hidden'
    }
    console.log(menuVariant[props.toggleDropdown])

    return (
        <ul className={menuVariant[props.toggleDropdown]}>    
            <li><a href={`/users/${props.id}`}>Account Settings</a></li>
            <li><button onClick={logout}>Log out</button></li>

        </ul>
    )
}

export default DropdownMenu;