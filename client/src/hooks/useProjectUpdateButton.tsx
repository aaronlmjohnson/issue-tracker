import { useState } from "react";
import { useActiveFormContext } from "./useActiveFormContext";

const useProjectUpdateButton = ()=>{

    const [formActive, setFormActive] = useState(false);
    const {activeForm, setActiveForm} = useActiveFormContext();

    const handleFormDisplay = ()=>{
        setFormActive((prevState:any)=> prevState ? false : true);
    }

    const handleCancelButton = ()=>{
        setFormActive((prevState:any)=>{
            return false;
        });
    }
    const updateButton = ()=>{
        return(<button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary"onClick={handleFormDisplay}> 
            Update
        </button>);
    }

    const cancelButton = ()=>{
        return (<button className="project-update-button"onClick={handleFormDisplay}> 
            Cancel
        </button>);
    }
    
    return{
        handleFormDisplay,
        updateButton,
        cancelButton,
    }
}

export default useProjectUpdateButton;