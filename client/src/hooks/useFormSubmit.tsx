import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useFormSubmit = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { projectId } = useParams();

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
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            setIsLoading(false);
            setError("");
            console.log(response);
            if(method === "DELETE" && projectId) navigate(json.redirectUrl);
            if(method === "PATCH" || method === "DELETE") navigate(0);
            else navigate(json.redirectUrl);
        }
    }

    return {
        submitForm,
        isLoading,
        error
    }
}

