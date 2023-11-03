import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';

export const useFetchData = (url:string)=>{
    const [data, setData] = useState<any>([]);//<{title:string}>({title:""})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { user } = useAuthContext();

    useEffect(()=>{
        refetch(url);  
    }, [url]);

    const refetch = async (url:string)=>{
        try{
            setLoading(true);
            const response:any = await fetch(url, {
                headers: {
                    'Authorization': `Bearer: ${user.token}`
                }
            });
            
            if(!response.ok) 
                throw Error(response.status);
            const apiData = await response.json();
            setData(apiData);
        }catch(e){
            setError(true);
        }finally{
            setLoading(false);
        }
    }
    
    return {data, loading, error, refetch};

}


