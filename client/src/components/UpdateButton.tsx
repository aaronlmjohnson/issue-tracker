import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { TFormObject} from "../lib/types";
interface IUpdateButtonProps {
    formName: "none"|
    "create-project" | 
    "create-ticket" | 
    "update-project" | 
    "update-ticket",
    formObj:TFormObject,
}

const UpdateButton = (props:IUpdateButtonProps)=>{
    const { formName, formObj} = props;

    const {setActiveForm, setUpdateTarget} = useActiveFormContext();

    const handleFormDisplay = ()=>{
        setActiveForm(formName);
        setUpdateTarget(formObj);
    }

    return (
        <button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary"onClick={handleFormDisplay}> 
            Update
        </button>
    )
}

export default UpdateButton;