import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { TFormObject} from "../lib/types";
interface IProps {
    formName: "none"|
    "create-project" | 
    "create-ticket" 
    buttonText:string
}

const CreateButton = (props:IProps)=>{
    const { formName, buttonText} = props;

    const {setActiveForm} = useActiveFormContext();

    const handleFormDisplay = ()=>{
        setActiveForm(formName);
    }

    return (
        <button className="text-white"onClick={handleFormDisplay}> 
            {buttonText}
        </button>
    )
}

export default CreateButton;