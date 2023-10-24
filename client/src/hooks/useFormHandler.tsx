import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useFormHandler = (init?:any)=>{
    const [form, setForm] = useState(init || {});

    const handleChange = (e:any, formProperty:any)=>{
        setForm({...form, [formProperty]: e.target.value});
    }

    return {
        setForm,
        form,
        handleChange
    }
}

export default useFormHandler;

