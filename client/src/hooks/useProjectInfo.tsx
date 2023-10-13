import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "./useFetchData";

const useProjectInfo = ()=>{

    const { projectId } = useParams();
    
    const {data:project, loading, error} = useFetchData(`http://localhost:3001/projects/${projectId}`);

    return{
        project,
        loading,
        error
    }
}

export default useProjectInfo;