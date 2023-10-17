const ComboBox = (props:any)=>{
    const {options, selected} = props;
    return (
        <select name={props.forValue } id={props.forValue} onChange={props.setter} value={selected}>
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