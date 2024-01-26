import { useActiveFormContext } from "../hooks/useActiveFormContext";
import FormElement from "./FormElement";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";
import { useFormSubmit } from "../hooks/useFormSubmit";

const DeleteConfirmation = ()=>{
    const { updateTarget } = useActiveFormContext();

    const { submitForm } = useFormSubmit();
    
    const inputs = [
        <h2>Are you sure you want to delete this?</h2>,
        <div className="flex justify-between">
            <SubmitButton submitStyle={"submit-two"} content={"Yes"}/>
            <CancelButton />
        </div>
        
    ]
    const handleSubmit = (e:any)=>{
        if(!updateTarget) return;
        e.preventDefault();

        let path = "";
        if(updateTarget.type === "project")
            path = `/projects/${updateTarget._id}/delete`;
        if(updateTarget.type === "ticket")
            path = `/projects/${updateTarget.project._id}/tickets/${updateTarget._id}/delete`;
            
        submitForm(updateTarget, path, 'DELETE');
    }

    return (
       updateTarget && <FormElement 
        formStyle={"small"}
        title = {"Delete"}
        method={"DELETE"}
        inputs = {inputs}
        handleSubmit={handleSubmit}
        formObj={updateTarget}
       />
    )
}

export default DeleteConfirmation;