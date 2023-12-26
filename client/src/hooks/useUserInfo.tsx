import { useEffect, useState } from 'react';
import { useFetchData } from './useFetchData';

export const useUserInfo = ()=>{
    const {data:developers, loading:devsLoading} = useFetchData("/users/developers");
    const {data:leads, loading:leadsLoading} = useFetchData("/users/project-leads");
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(devsLoading && leadsLoading) setLoading(true);
        else setLoading(false);
    }, [devsLoading, leadsLoading])
    return {
        developers,
        leads,
        loading
    }
}

