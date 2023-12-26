import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "./useFetchData";

const useProjectInfo = ()=>{


    
    const {data:project, loading, error} = useFetchData(`/projects/${"lol"}`);

    return{
        project,
        loading,
        error
    }
}

export default useProjectInfo;