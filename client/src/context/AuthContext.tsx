import { createContext, useReducer } from 'react';

export const AuthContext = createContext(null);

type AuthContextProviderProps = {
    children: React.ReactNode
}

type State = {
    user: string | null
}

type AuthAction = 
    | {type: "LOGIN", payload: {user: string, action: AuthAction}}
    | {type: "LOGOUT", payload: {user: string, action: AuthAction}}


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

    console.log('AuthContext state:', state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
