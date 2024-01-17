import { useEffect } from "react";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import { TFormObject} from "../lib/types";
interface IProps {
    formName: "none"|
    "create-project" | 
    "create-ticket" 
    buttonText:string
}

const CreateButton = (props:IProps)=>{
    const { formName, buttonText} = props;
    const { isAuthed, isAdmin } = useCheckAuthorization();
    const {setActiveForm} = useActiveFormContext();

    useEffect(()=> isAdmin(), []);

    const handleFormDisplay = ()=>{
        setActiveForm(formName);
    }

    return (

        isAuthed && <button className="text-white" onClick={handleFormDisplay}> 
            {buttonText}
        </button>
    )
}

export default CreateButton;