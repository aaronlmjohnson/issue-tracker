import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogout = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = ()=>{
        setIsLoading(true);
        setError("");

        console.log(`${localStorage.getItem('user')} has logged out.`);
        localStorage.removeItem('user');
        dispatch({type:"LOGOUT"});

    }
    
    return {
        logout,
        isLoading,
        error
    }
}

