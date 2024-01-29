import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFormHandler = (init?:any)=>{
    const [form, setForm] = useState(init || {});

    const handleChange = (e:any, formProperty:any)=>{  
        if(e.target.nodeName === "path")
            setForm({...form, [formProperty]: e.target.parentNode.parentNode.value});//handling buttons with font awesome icons
        else
            setForm({...form, [formProperty]: e.target.value});
    }

    return {
        setForm,
        form,
        handleChange
    }
}

export default useFormHandler;

