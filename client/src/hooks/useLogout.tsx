import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { redirect, useNavigate } from 'react-router-dom';
import { useFormSubmit } from './useFormSubmit';

export const useLogout = ()=>{

    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    const { submitForm } = useFormSubmit();

    const logout = ()=>{
        console.log(`${localStorage.getItem('user')} has logged out.`);
        submitForm({}, 'http://localhost:3001/users/logout');
        localStorage.removeItem('user');
        dispatch({type:"LOGOUT"});
        navigate('/login');
    }
    
    return {
        logout,
    }
}

