const TextArea = (props:any)=>{

    return (
        <div className="flex flex-col ">
            <label htmlFor={props.forValue} className={"text-area-label"}>{props.label}</label>
            <textarea 
                name={props.forValue} 
                className="border-2"
                onChange={props.setter} 
                rows={3} 
                placeholder={props.placeholder}
                cols={30} 
                value ={props.value}>
            </textarea>
        </div>
    )
}

export default TextArea;