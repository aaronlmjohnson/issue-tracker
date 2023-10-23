import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "./useFetchData";

const useProjectInfo = (id?:string)=>{

const { projectId } = useParams();

    
    const {data:project, loading, error} = useFetchData(`http://localhost:3001/projects/${id || projectId}`);

    return{
        project,
        loading,
        error
    }
}

export default useProjectInfo;