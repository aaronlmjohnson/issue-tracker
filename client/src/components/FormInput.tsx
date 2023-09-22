const FormInput = (props: any)=>{
    const styling = props.styling || "inline border border-gray-300";
    return (
        <div className= {props.classValue}>
            <label htmlFor={props.forValue}>{props.content}</label>
            <input className={styling} name={props.nameValue} type={props.type} />
        </div>
    );
}

export default FormInput;

