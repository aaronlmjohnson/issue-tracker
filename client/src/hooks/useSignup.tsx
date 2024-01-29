import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';

export const useSignup = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    const path = process.env.REACT_APP_PRODUCTION_API || process.env.REACT_APP_DEV_DOMAIN;
    interface FormObject {
        email:String,
        first_name:String,
        last_name:String,
        role:String,
        password:string
    }
    const signup = async(form:FormObject)=>{
        setIsLoading(true);
    
        const response = await fetch(`${path}/users/sign-up`, {
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
            console.error(json.error);
        }

        if(response.ok){
            setIsLoading(false);
            setError("")
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json});
            navigate("/");

        }
    }
    return {
        signup,
        isLoading,
        error
    }
}

