const TextInput = (props:any)=>{
    const styling = "border";

    return (
        <div className="flex flex-col">
            <label htmlFor={props.forValue} className="font-secondary text-base">{props.label}</label>
            <input 
                className="border-2 w-auto h-12 p-2.5 rounded"
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