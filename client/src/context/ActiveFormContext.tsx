import { createContext, useState} from 'react';
import {TFormObject} from '../lib/types';

type TActiveForm = "create-project" | 
                   "create-ticket" | 
                   "update-project" | 
                   "update-ticket" |
                   "delete-confirmation" |
                   "none";

interface IActiveFormContext {
    activeForm: TActiveForm | null,
    setActiveForm: React.Dispatch<React.SetStateAction<TActiveForm>>
    updateTarget: TFormObject
    setUpdateTarget: React.Dispatch<React.SetStateAction<TFormObject>>
    activeDetail: TFormObject
    setActiveDetail: React.Dispatch<React.SetStateAction<TFormObject>>
    reset: ()=> void

}

export const ActiveFormContext = createContext<IActiveFormContext | null>(null);

interface IActiveFormProviderProps{
    children: React.ReactNode
}

export const ActiveFormContextProvider = ({children}:IActiveFormProviderProps)=>{
    const [activeForm, setActiveForm] = useState<TActiveForm>("none");
    const [updateTarget, setUpdateTarget] = useState<TFormObject>({} as TFormObject);
    const [activeDetail, setActiveDetail] = useState<TFormObject>({} as TFormObject);

    const reset = ()=>{
        setActiveForm("none");
        setActiveDetail({} as TFormObject);
        setUpdateTarget({} as TFormObject);
    }

    return(
        <ActiveFormContext.Provider value={{activeForm, setActiveForm, updateTarget, setUpdateTarget, reset, activeDetail, setActiveDetail}}>
            {children}
        </ActiveFormContext.Provider>
    )
}

