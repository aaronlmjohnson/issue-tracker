import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export const useSignup = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const signup = async(username:String, password:string, role:String)=>{
        setIsLoading(true);
        setError("");
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
            console.log(json);
            setError(json.error);
        }

        if(response.ok){
            setIsLoading(false);
            setError("")
            localStorage.setItem('user', JSON.stringify(json));
            console.log(`Welcome to Issue Tracker ${username}.`);
            dispatch({type: 'LOGIN', payload: json});
            navigate(json.redirectUrl);

        }
    }
    return {
        signup,
        isLoading,
        error
    }
}

