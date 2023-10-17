const Checkboxes = (props:any)=>{

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