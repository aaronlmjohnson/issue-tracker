import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFormSubmit = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const submitForm = async(data:any, url:string)=>{
        setIsLoading(true);
        setError("");
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
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
            navigate(json.redirectUrl);
        }
    }
    return {
        submitForm,
        isLoading,
        error
    }
}

