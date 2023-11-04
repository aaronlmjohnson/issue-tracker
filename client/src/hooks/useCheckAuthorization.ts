import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useCheckAuthorization = ()=>{
    const [isAuthed, setIsAuthed] = useState(false);
    const {user, loading:userLoading} = useAuthContext();

    
    const isLeadOfProject = (providedId:string)=>{
        if(!user) return;
        setIsAuthed(user.user._id === providedId || user.user.role === "Administrator");
    }

    const isAuthedToEditTicket = (ticket:any) =>{
        if(!user) return;
        if(user.user.role === "Administrator") setIsAuthed(true);
        else if(ticket.author._id === user.user._id) setIsAuthed(true);
        else if(ticket.project.project_lead === user.user._id) setIsAuthed(true);
    }

    return {
        isLeadOfProject,
        isAuthedToEditTicket,
        isAuthed
    }
}

export default useCheckAuthorization;