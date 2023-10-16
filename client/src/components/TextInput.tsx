const TextInput = (props:any)=>{
    const styling = "border";

    return (
        <>
            <label htmlFor={props.forValue} className={"text-input-label"}>{props.label}</label>
            <input 
                className={"text-input" + styling}
                name={props.forValue} 
                type="text" 
                onChange={props.setter} 
                value={props.value}
            />
        </>
    )
}

export default TextInput;