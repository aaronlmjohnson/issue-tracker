import { createContext, useState} from 'react';

type TActiveForm = "create-project" | 
                   "create-ticket" | 
                   "update-project" | 
                   "update-ticket" |
                   "none";

interface IActiveFormContext {
    activeForm: TActiveForm | null,
    setActiveForm: React.Dispatch<React.SetStateAction<TActiveForm>>
}

export const ActiveFormContext = createContext<IActiveFormContext | null>(null);

interface IActiveFormProviderProps{
    children: React.ReactNode
}

export const ActiveFormContextProvider = ({children}:IActiveFormProviderProps)=>{
    const [activeForm, setActiveForm] = useState<TActiveForm>("none");

    return(
        <ActiveFormContext.Provider value={{activeForm, setActiveForm}}>
            {children}
        </ActiveFormContext.Provider>
    )
}

