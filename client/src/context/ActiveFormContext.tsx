import { createContext, useState} from 'react';
import {TProject, TTicket} from '../lib/types';

type TActiveForm = "create-project" | 
                   "create-ticket" | 
                   "update-project" | 
                   "update-ticket" |
                   "none";

interface IActiveFormContext {
    activeForm: TActiveForm | null,
    setActiveForm: React.Dispatch<React.SetStateAction<TActiveForm>>
    updateTarget: TProject | TTicket | null
    setUpdateTarget: React.Dispatch<React.SetStateAction<TProject | TTicket | null>>
}

export const ActiveFormContext = createContext<IActiveFormContext | null>(null);

interface IActiveFormProviderProps{
    children: React.ReactNode
}

export const ActiveFormContextProvider = ({children}:IActiveFormProviderProps)=>{
    const [activeForm, setActiveForm] = useState<TActiveForm>("none");
    const [updateTarget, setUpdateTarget] = useState<TProject | TTicket | null>(null);

    return(
        <ActiveFormContext.Provider value={{activeForm, setActiveForm, updateTarget, setUpdateTarget}}>
            {children}
        </ActiveFormContext.Provider>
    )
}

