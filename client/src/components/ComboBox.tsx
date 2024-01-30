const ComboBox = (props:any)=>{
    const {options, selected, disabled, label, placeholder} = props;
    return (
        <div className="flex flex-col">
            <label htmlFor={props.forValue} className={""}>{props.label}</label>

            <select name={props.forValue } 
                    className="bg-white w-auto h-12 p-2.5 rounded border-2"
                    id={props.forValue} onChange={props.setter} 
                    value={selected} disabled={disabled || false}
            >
                <option className="bg-white text-non-focus"value="">{placeholder}</option>
                {options && options.map((option:any, i:number)=> 
                    {
                        return(<option  className="bg-white" value={option._id} key={crypto.randomUUID()}>
                            {props.optionsKey ? option[props.optionsKey] : option}
                        </option>)
                    }
                )}
            </select>
        </div>
    )
}

export default ComboBox;