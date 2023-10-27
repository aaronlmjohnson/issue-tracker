import { useState } from "react"
import { useFormSubmit } from "../hooks/useFormSubmit";



const useDeleteConfirmation = (url:string, obj:any)=>{

    const [display, setDisplay] = useState(false);
    const [deleteObj, setDeleteObj] = useState(false);
    const { submitForm } = useFormSubmit();

    const handleDelete = (e:any)=>{
        e.preventDefault();
        submitForm(obj, url, "DELETE");
    }
    const confirmationForm = ()=>{
        return (
            <form>
                <h2>Are you sure you want to delete this?</h2>
                <button onClick={(e:any)=> handleDelete(e)}>Yes</button>
                <button onClick={()=> setDisplay(false) }>Cancel</button>
            </form>
        )
    }
    return {
        confirmationForm,
        display,
        setDisplay,
        setDeleteObj,
        deleteObj
    }
}

export default useDeleteConfirmation;