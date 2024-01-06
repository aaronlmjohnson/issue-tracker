import { useState, useEffect } from "react";

const Checkboxes = (props:any)=>{

    const [checkState, setCheckState] = useState<string[]>([]);
    const {form , setter, checkBoxOptions, selectedOptions, checkboxProperty} = props; 

    useEffect(()=>{
        setCheckState((prevState:string[])=>{
            return checkBoxOptions;
        });
    },[])

    const handleCheckbox = (e:any, i:number)=>{
        const isChecked = selectedOptions.includes(e.target.value);

        setCheckState((prevState:string[])=>{
            const newState = isChecked ?  
                    prevState.filter((value)=> value !== e.target.value) : //if previously checked then uncheck and remove from state else check and add to state
                    [...prevState, e.target.value];
            setter({...form, [checkboxProperty]:newState})
            return newState;
        });        
    }

    return (
        <fieldset className="">
                <legend className="my-3">{props.legend}</legend>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-y-4">
                    {props.checkboxes && props.checkboxes.map((checkbox: any, i:number)=>{   
                        return ( 
                            <div key={crypto.randomUUID()}>
                                <input 
                                    type="checkbox" 
                                    name={checkbox.name} 
                                    value ={checkbox._id}
                                    checked={checkState.includes(checkbox._id)}
                                    onChange={e=> handleCheckbox(e, i)}
                                /> 
                                <label htmlFor={checkbox.name}>
                                    {checkbox[props.labelKey]}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </fieldset>
    )
}

export default Checkboxes;