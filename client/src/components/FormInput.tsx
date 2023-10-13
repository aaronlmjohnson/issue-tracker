const FormInput = (props: any)=>{
   
    const {styling} = props;

    const selectInput = (optionsArr: any)=>{
        return (
            <select name={props.nameValue } id={props.nameValue} onChange={props.setter} >
                <option>Select Project Lead</option>
                {optionsArr.map((option:any, i:number)=> 
                    <option value={option._id} key={crypto.randomUUID()}>
                        {option[props.optionsKey]}
                    </option>
                )}
            </select>
        )
    }

    const formInput = ()=>{
        return (
            <input className={styling}name={props.nameValue} type={props.type} onChange={props.setter} />
        )
    }

    const textArea = ()=>{
        return (
            <textarea className={styling} name={props.nameValue} onChange={(e:any)=> props.setter(e)} rows={props.rows} cols={props.cols}></textarea>
        )
    }

    const checkBoxes = ()=>{
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

    return (
        <div>
            <label htmlFor={props.forValue} className={""}>{props.content}</label>
            {
                (props.type === "select" && selectInput(props.options)) ||
                (props.type === "textarea" && textArea()) ||
                (props.type === "checkbox" && checkBoxes()) ||
                (formInput())
            }
        </div>
    );
}

export default FormInput;

