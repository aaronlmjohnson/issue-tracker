const TextArea = (props:any)=>{
    const styling = "border border-black inline-block";

    return (
        <div className="block">
            <label htmlFor={props.forValue} className={"text-area-label"}>{props.label}</label>
            <textarea 
                className={styling} 
                name={props.forValue} 
                onChange={props.setter} 
                rows={5} 
                cols={30} 
                value ={props.value}>
            </textarea>
        </div>
    )
}

export default TextArea;