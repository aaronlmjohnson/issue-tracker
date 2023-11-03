import { createContext, useEffect, useReducer } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

type AuthContextProviderProps = {
    children: React.ReactNode
}

type State = {
    user: string | null
}

type AuthAction = 
    | {type: "LOGIN", payload: {user: any, action: AuthAction}}
    | {type: "LOGOUT", payload: {user: any, action: AuthAction}}


export const authReducer = (state:any, action:AuthAction)=>{
    switch(action.type) {
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return { user: null }
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}:AuthContextProviderProps)=>{
    const [state, dispatch] = useReducer(authReducer, {user: null});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const storedUserData = localStorage.getItem('user');
        const user = storedUserData ? JSON.parse(storedUserData || '') : null;
        setLoading(false);
        if(user) dispatch({type:"LOGIN", payload: user});

    }, []);


    return (
        <AuthContext.Provider value={{...state, dispatch, loading}}>
            {children}
        </AuthContext.Provider>
    )
}
