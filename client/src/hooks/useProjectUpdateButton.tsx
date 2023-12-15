import { useState } from "react"

const useProjectUpdateButton = ()=>{

    const [formActive, setFormActive] = useState(false);

    const handleUpdateButton = ()=>{
        setFormActive((prevState:any)=>{
            return true;
        });
    }

    const handleCancelButton = ()=>{
        setFormActive((prevState:any)=>{
            return false;
        });
    }
    const updateButton = ()=>{
        return(<button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary"onClick={handleUpdateButton}> 
            Update
        </button>);
    }

    const cancelButton = ()=>{
        return (<button className="project-update-button"onClick={handleCancelButton}> 
            Cancel
        </button>);
    }
    
    return{
        updateButton,
        cancelButton,
        formActive,
        setFormActive
    }
}

export default useProjectUpdateButton;