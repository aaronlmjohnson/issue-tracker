const PasswordInput = (props:any)=>{
    const styling = "border";

    return (
        <>
            <label htmlFor={props.forValue} className={"password-input-label"}>{props.label}</label>
            <input 
                className={"text-input" + styling}
                name={props.forValue} 
                type="password" 
                onChange={props.setter} 
                value={props.value}
            />
        </>
    )
}

export default PasswordInput;