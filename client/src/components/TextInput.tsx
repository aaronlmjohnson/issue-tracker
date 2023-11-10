const TextInput = (props:any)=>{
    const styling = "border";

    return (
        <div className="flex flex-col">
            <label htmlFor={props.forValue} className="font-secondary">{props.label}</label>
            <input 
                className="border w-auto h-12 p-2.5 rounded"
                name={props.forValue} 
                type="text" 
                onChange={props.setter} 
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextInput;