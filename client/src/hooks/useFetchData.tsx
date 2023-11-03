import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';


export const useFetchData = (url:string)=>{
    const [data, setData] = useState<any>([]);//<{title:string}>({title:""})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { user, loading:userDataLoading } = useAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
        if(userDataLoading) return;
            refetch(url);   
    }, [url, userDataLoading]);

    const refetch = async (url:string)=>{
        try{
            setLoading(true);
            const response:any = await fetch(url, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer: ${user.token}`
                }
            });

            if(!response.ok) 
                throw Error(response.status);
            const apiData = await response.json();
            setData(apiData);
        }catch(e){
            console.error(e);
            setError(true);
            if(!user) navigate("/401");
        }finally{
            setLoading(false);
        }
    }
    
    return {data, loading, error, refetch};

}


