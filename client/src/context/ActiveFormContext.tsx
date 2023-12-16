import { createContext, useState} from 'react';

type TActiveForm = "project" | "ticket"

interface IActiveFormContext {
    activeForm: TActiveForm | null,
    setActiveForm: React.Dispatch<React.SetStateAction<null>>
}

export const ActiveFormContext = createContext<IActiveFormContext | null>(null);

interface IActiveFormProviderProps{
    children: React.ReactNode
}

export const ActiveFormContextProvider = ({children}:IActiveFormProviderProps)=>{
    const [activeForm, setActiveForm] = useState(null);

    return(
        <ActiveFormContext.Provider value={{activeForm, setActiveForm}}>
            {children}
        </ActiveFormContext.Provider>
    )
}

