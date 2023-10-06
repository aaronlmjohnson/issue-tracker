import { useState, useEffect } from 'react';

export const useFetchData = (url:string)=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        refetch(url);  
    }, [url]);

    const refetch = async (url:string)=>{
        try{
            setLoading(true);
            const response:any = await fetch(url);
            
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


