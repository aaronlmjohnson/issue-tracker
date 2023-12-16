import {useContext} from 'react';
import { ActiveFormContext } from '../context/ActiveFormContext';

export const useActiveFormContext = ()=>{
    const context = useContext(ActiveFormContext);

    if(!context){
        throw new Error(
            "useActiveFormContext must be within ActiveFormContext Provider"
        );
    }

    return context;
}