import { useState } from "react"

const useTicketUpdateButton = ()=>{

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
        return(<button className="ticket-update-button"onClick={handleUpdateButton}> 
            Update
        </button>);
    }

    const cancelButton = ()=>{
        return (<button className="ticket-update-button"onClick={handleCancelButton}> 
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

export default useTicketUpdateButton;