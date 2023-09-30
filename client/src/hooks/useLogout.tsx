import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogout = ()=>{

    const { dispatch } = useAuthContext();

    const logout = ()=>{
        localStorage.removeItem('user');
        console.log(`${localStorage.getItem('user')} has logged out.`);
        dispatch({type:"LOGOUT"});

    }
    
    return {
        logout,
    }
}

