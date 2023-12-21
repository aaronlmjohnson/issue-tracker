import { useActiveFormContext } from "../hooks/useActiveFormContext";
import FormElement from "./FormElement";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { useLocation } from "react-router-dom";

const DeleteConfirmation = ()=>{
    const { updateTarget } = useActiveFormContext();
    const { submitForm } = useFormSubmit();
    const location = useLocation();

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
        const endpoint = location.pathname.split('/')[1] + '/' + updateTarget._id;
        const path = process.env.REACT_APP_DEV_BACKEND_PATH + endpoint + '/delete';
        
        submitForm(updateTarget, path, 'DELETE');
    }

    return (
       updateTarget && <FormElement 
        title = {"Delete"}
        method={"DELETE"}
        inputs = {inputs}
        handleSubmit={handleSubmit}
        formObj={updateTarget}
       />
    )
}

export default DeleteConfirmation;