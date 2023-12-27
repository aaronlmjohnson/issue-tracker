import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { redirect, useNavigate } from 'react-router-dom';
import { useFormSubmit } from './useFormSubmit';

export const useLogout = ()=>{
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    const { submitForm } = useFormSubmit();

    const logout = ()=>{
        submitForm({}, '/users/logout');
        localStorage.removeItem('user');
        dispatch({type:"LOGOUT"});
        navigate('/login');
    }
    
    return {
        logout,
    }
}

