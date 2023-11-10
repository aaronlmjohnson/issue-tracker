const ComboBox = (props:any)=>{
    const {options, selected, disabled} = props;
    return (
        <select name={props.forValue } 
                className="border bg-white w-auto h-12 p-2.5 rounded"
                id={props.forValue} onChange={props.setter} 
                value={selected} disabled={disabled || false}
        >
            <option className="bg-white"value="">Select an option</option>
            {options && options.map((option:any, i:number)=> 
                {
                    return(<option  className="bg-white" value={option._id} key={crypto.randomUUID()}>
                        {props.optionsKey ? option[props.optionsKey] : option}
                    </option>)
                }
            )}
        </select>
    )
}

export default ComboBox;