import { useActiveFormContext } from "../hooks/useActiveFormContext";


const CancelButton = ()=>{
    const {activeForm, setActiveForm, setUpdateTarget} = useActiveFormContext();

    const handleFormDisplay = ()=>{
        setActiveForm("none");
        setUpdateTarget(null);
    }

    return (
        <button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary w-1/3"onClick={handleFormDisplay}> 
            Cancel
        </button>
    )
}

export default CancelButton;