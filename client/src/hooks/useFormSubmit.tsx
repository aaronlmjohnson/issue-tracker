import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFormSubmit = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const submitForm = async(data:any, url:string, method="POST")=>{
        setIsLoading(true);
        setError("");
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        const json = await response.json();
        console.log(json);
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            setIsLoading(false);
            setError("")
            if(method === "POST") navigate(0)
            else navigate(json.redirectUrl);
        }
    }
    return {
        submitForm,
        isLoading,
        error
    }
}
