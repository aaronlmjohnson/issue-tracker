import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { redirect, useNavigate } from 'react-router-dom';

export const useLogout = ()=>{

    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem('user');
        console.log(`${localStorage.getItem('user')} has logged out.`);
        dispatch({type:"LOGOUT"});
        navigate('/login');
    }
    
    return {
        logout,
    }
}

