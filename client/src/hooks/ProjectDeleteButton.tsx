import { useEffect, useState } from "react";
import { TFormObject } from "../lib/types";
import DeleteConfirmation from "../components/DeleteConfirmation";
import { useActiveFormContext } from "./useActiveFormContext";
import { useFormSubmit } from "./useFormSubmit";

interface IProps {
    obj: TFormObject;
    url: string
}

 const ProjectDeleteButton = (props:IProps)=> {
    const { obj, url } = props;
    const { submitForm } = useFormSubmit()
    const {activeForm, setActiveForm, setUpdateTarget, deletingTarget} = useActiveFormContext();

    const handleConfirmationDisplay = ()=> {
        setActiveForm("delete-confirmation");
        setUpdateTarget(obj);
    };

    const handleDelete = ()=> submitForm(obj, `http://localhost:3001/projects/${obj._id}/delete`, 'DELETE');

    useEffect(()=>{
        if(deletingTarget) handleDelete(); //<<<< this deletes all projects
    }, [deletingTarget]);

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
