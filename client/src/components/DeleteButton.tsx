import { TFormObject } from "../lib/types";
import DeleteConfirmation from "./DeleteConfirmation";
import { useActiveFormContext } from "../hooks/useActiveFormContext";

interface IProps {
    obj: TFormObject;
    url: string
}

 const ProjectDeleteButton = (props:IProps)=> {
    const { obj } = props;
    const {activeForm, setActiveForm, setUpdateTarget} = useActiveFormContext();


    const handleConfirmationDisplay = ()=> {
        setActiveForm("delete-confirmation");
        setUpdateTarget(obj);
    };

    return(
        <>
            <button className="px-4 py-1 border-2 border-delete rounded-lg font-secondary font-bold text-base text-delete" onClick={handleConfirmationDisplay}>
                Delete
            </button>
            {activeForm === "delete-confirmation" && <DeleteConfirmation />}
        </>
        
    )
}

export default ProjectDeleteButton;
