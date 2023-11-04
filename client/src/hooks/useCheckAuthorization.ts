import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useCheckAuthorization = ()=>{
    const [isAuthed, setIsAuthed] = useState(false);
    const {user, loading:userLoading} = useAuthContext();

    
    const compare = (providedId:string)=>{
        if(!user) return;
        setIsAuthed(user.user._id === providedId || user.user.role === "Administrator");
    }

    return {
        compare,
        isAuthed
    }
}

export default useCheckAuthorization;