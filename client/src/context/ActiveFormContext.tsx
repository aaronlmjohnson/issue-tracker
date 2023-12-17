import { createContext, useState} from 'react';

type TActiveForm = "create-project" | 
                   "create-ticket" | 
                   "update-project" | 
                   "update-ticket" |
                   "none";


interface IActiveFormContext {
    activeForm: TActiveForm | null,
    setActiveForm: React.Dispatch<React.SetStateAction<TActiveForm>>
    updateTarget: null,
    setUpdateTarget: React.Dispatch<React.SetStateAction<null>>
}

export const ActiveFormContext = createContext<IActiveFormContext | null>(null);

interface IActiveFormProviderProps{
    children: React.ReactNode
}

export const ActiveFormContextProvider = ({children}:IActiveFormProviderProps)=>{
    const [activeForm, setActiveForm] = useState<TActiveForm>("none");
    const [updateTarget, setUpdateTarget] = useState(null);

    return(
        <ActiveFormContext.Provider value={{activeForm, setActiveForm, updateTarget, setUpdateTarget}}>
            {children}
        </ActiveFormContext.Provider>
    )
}

