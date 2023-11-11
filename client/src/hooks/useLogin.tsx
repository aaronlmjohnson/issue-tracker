import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export const useLogin = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    interface LoginFormObj {
        email:String,
        password:string,
    }
    const login = async(form:LoginFormObj, url="")=>{
        setIsLoading(true);
        setError("");
        const response = await fetch(url || `http://localhost:3001/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
        })

        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            setIsLoading(false);
            setError("")
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json});
            navigate(json.redirectUrl);
        }
    }
    return {
        login,
        isLoading,
        error
    }
}

