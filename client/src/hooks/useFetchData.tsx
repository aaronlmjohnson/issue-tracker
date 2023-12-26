import { useState, useEffect } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';


export const useFetchData = (path:string, unAuth = false)=>{
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { user, loading:userDataLoading } = useAuthContext();
    const url = process.env.REACT_APP_DEV_DOMAIN + path;
    const navigate = useNavigate();

    useEffect(()=>{
        if(userDataLoading) return;
        unAuth ? unAuthRefetch(url) : refetch(url);   
    }, [path, userDataLoading]);

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

    /* Fix for getting roles for Sign up form */
    const unAuthRefetch = async (url:string)=>{
        try{
            setLoading(true);
            const response:any = await fetch(url);
            if(!response.ok) 
                throw Error(response.status);
            const apiData = await response.json();
            setData(apiData);
        }catch(e){
            console.error(e);
            setError(true);
        }finally{
            setLoading(false);
        }
    }
    
    return {data, loading, error, refetch};

}


