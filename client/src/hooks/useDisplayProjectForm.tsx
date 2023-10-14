import { useState } from "react";

const useDisplayProjectForm = ()=>{
    const [displayForm, setDisplayForm] = useState(false);

    return {
        displayForm,
        setDisplayForm
    }
}