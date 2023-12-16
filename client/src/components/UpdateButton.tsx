import { useActiveFormContext } from "../hooks/useActiveFormContext";

interface IUpdateButtonProps {
    formName: "none"|
    "create-project" | 
    "create-ticket" | 
    "update-project" | 
    "update-ticket";
}

const UpdateButton = (props:IUpdateButtonProps)=>{
    const { formName } = props;

    const {activeForm, setActiveForm} = useActiveFormContext();

    const handleFormDisplay = ()=>{
        setActiveForm("create-project");
    }

    return (
        <button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary"onClick={handleFormDisplay}> 
            Update
        </button>
    )
}

export default UpdateButton;