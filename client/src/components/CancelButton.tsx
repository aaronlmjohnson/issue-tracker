import { useActiveFormContext } from "../hooks/useActiveFormContext";


const CancelButton = ()=>{
    const {activeForm, activeDetail, reset} = useActiveFormContext();

    const handleFormDisplay = ()=>{
        reset();
    }

    return (
        <button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary"onClick={handleFormDisplay}> 
            Cancel
        </button>
    )
}

export default CancelButton;