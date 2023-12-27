import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from './useAuthContext';
import { useActiveFormContext } from './useActiveFormContext';

export const useFormSubmit = ()=>{
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { projectId } = useParams();
    const { user, loading:userDataLoading } = useAuthContext();
    const { reset } = useActiveFormContext();

    const submitForm = async(data:any, path:string, method="POST")=>{
        setIsLoading(true);
        setError("");
        const url = process.env.REACT_APP_DEV_DOMAIN + path;
        console.log(url);
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${user.token}`
            },
            body: JSON.stringify({...data, loggedInUser:user.user._id}),
        });
        
        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            setIsLoading(false);
            setError("");
            reset();
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

