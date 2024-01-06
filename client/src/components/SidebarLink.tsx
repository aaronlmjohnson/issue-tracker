import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateButton from "./CreateButton";

interface IProps{
    icon: IconDefinition,
    section: string,
    dropdown: ILinkObj[]
}

interface ILinkObj {
    name: string,
    link: string
}

const SidebarLink = (props:IProps)=>{
    const [displayDropdown, setDisplayDropdown] = useState(false);


    const toggleDropdown = ()=>{
        setDisplayDropdown(prevState => prevState ? false : true)
    }

    return (
        <li className="py-8">
            <button className="flex items-center w-full" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={props.icon} className="text-white text-2xl w-12 pr-4"/>
                <span className="flex justify-start w-full">
                    <p className="inline sidebarlink font-bold">
                        {props.section} 
                    </p>
                </span>
                
                <span><FontAwesomeIcon icon={faCaretRight} /></span>
            </button>
            <div className={`${displayDropdown ? '' : 'hidden'} text-center py-4 flex flex-col gap-1`}>
                {props.dropdown.map((linkObj:ILinkObj)=>{
                    return  <Link to={linkObj.link}>{linkObj.name}</Link>
                })}
                <CreateButton
                    formName={"create-project"}
                    buttonText={"Add Project"}
                />
            </div>
        </li>
    )
}

export default SidebarLink;