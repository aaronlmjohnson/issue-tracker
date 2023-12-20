import { useState } from "react";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { IProject, TFormObject } from "../lib/types";
import { ActiveFormContext } from "../context/ActiveFormContext";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import FormDisplay from "./FormDisplay";
import FormElement from "./FormElement";
import CancelButton from "./CancelButton";

// interface IProps {
//     obj: TFormObject
//     displayConfirmation: boolean
// }

const DeleteConfirmation = ()=>{
    // const [display, setDisplay] = useState(false);
    // const [deleteObj, setDeleteObj] = useState(false);
    const { setActiveForm, updateTarget } = useActiveFormContext();
    const { submitForm } = useFormSubmit();

    const inputs = [
        <h2>Are you sure you want to delete this?</h2>,
        <button onClick={(e:any)=> handleDelete(e)}>Yes</button>,
        <CancelButton />
    ]
    const handleDelete = (e:any)=>{
        
        
        e.preventDefault();
        console.log(updateTarget);
        // submitForm(obj, url, "DELETE");
    }

    return (
       updateTarget && <FormElement 
        title = {"Delete"}
        method={"DELETE"}
        inputs = {inputs}
        handleSubmit={handleDelete}
        formObj={updateTarget}
       />
    )
}

export default DeleteConfirmation;

//onClick={()=> setDisplay(false) }

{/* <form>
<h2>Are you sure you want to delete this?</h2>
<button onClick={(e:any)=> handleDelete(e)}>Yes</button>
<button onClick={(e:any)=> setActiveForm("none")}>Cancel</button>
</form> */}