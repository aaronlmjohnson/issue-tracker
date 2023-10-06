import { useState } from 'react';

export const useFetchData = ()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiCall = async (url:string)=>{
        setLoading(true);
        const response = await fetch(url)
        setData(await response.json());
        setLoading(false);
    }
    
    return {
        apiCall,
        loading,
        data
    }
}

