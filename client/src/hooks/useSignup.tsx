import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = ()=>{
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();


    const signup = async(username:String, password:string, role:String)=>{
        setIsLoading(true);
        setError(false);
        const response = await fetch("http://localhost:3001/sign-up", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password, role}),
        })

        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(true);
        }

        if(response.ok){
            setIsLoading(false);
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json})
        }
    }
    return {
        signup,
        isLoading,
        error
    }
}

