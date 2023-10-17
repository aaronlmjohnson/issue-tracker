const Checkboxes = (props:any)=>{
    // { form } = props;
    // const handleCheckbox = (e:any, i:number)=>{
    //     if(!form.developers_assigned_to.includes(e.target.value)){
    //         setCheckState((prevState:string[])=>{
    //             const newState = [...prevState, e.target.value];
    //             setForm({...form, developers_assigned_to:newState})
    //             return newState;
    //         });
    //     } else{
    //         setCheckState((prevState:string[])=>{
    //             const newState = prevState.filter((value)=> value !== e.target.value);
    //             setForm({...form, developers_assigned_to:newState})
    //             return newState;
    //         })
    //     }
    // }

    return (
        <fieldset>
                <legend>{props.legend}</legend>
                <div>
                    {props.checkboxes && props.checkboxes.map((checkbox: any, i:number)=>{   
                        return ( 
                            <div key={crypto.randomUUID()}>
                                <input 
                                    type="checkbox" 
                                    name={checkbox.name} 
                                    value ={checkbox._id}
                                    checked={props.checkState.includes(checkbox._id)}
                                    onChange={e=> props.setter(e, i)}
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