import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useCheckAuthorization = ()=>{
    const [isAuthed, setIsAuthed] = useState(false);
    const { user } = useAuthContext();

    const isAdmin = ()=>{
        if(!user) return;
        if(user.user.role === "Administrator") setIsAuthed(true);
    }
    
    const isLeadOfProject = (providedId:string)=>{
        if(!user) return;
        setIsAuthed(user.user._id === providedId || user.user.role === "Administrator");
    }

    const isAuthedToEditTicket = (ticket:any) =>{
        if(!user) return;
        if(user.user.role === "Administrator") setIsAuthed(true);
        else if(ticket.author._id === user.user._id) setIsAuthed(true);
        else if(ticket.project.project_lead._id === user.user._id) setIsAuthed(true);
    }

    const isAuthedToMakeTicket = (project:any) =>{
        if(!user) return;
        if(user.user.role === "Administrator") setIsAuthed(true);
        else if(project.project_lead === user.user._id) setIsAuthed(true);
        else 
            setIsAuthed(project.developers_assigned_to.some((_id:any) => _id === user.user._id));
    }

    const isAuthedToEditProject = (project:any)=>{
        if(!user) return;
        if(user.user.role === "Administrator") setIsAuthed(true);
        else if(project.project_lead._id === user.user._id) setIsAuthed(true);
    }

    return {
        isLeadOfProject,
        isAuthedToEditTicket,
        isAuthedToMakeTicket,
        isAuthedToEditProject,
        isAdmin,
        isAuthed
    }
}

export default useCheckAuthorization;