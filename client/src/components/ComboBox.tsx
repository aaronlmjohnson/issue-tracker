const ComboBox = (props:any)=>{
    const {options, selected, disabled} = props;
    return (
        <select name={props.forValue } id={props.forValue} onChange={props.setter} value={selected} disabled={disabled || false}>
            <option value="">Select an option</option>
            {options && options.map((option:any, i:number)=> 
                {
                    return(<option value={option._id} key={crypto.randomUUID()}>
                        {option[props.optionsKey]}
                    </option>)
                }
            )}
        </select>
    )
}

export default ComboBox;