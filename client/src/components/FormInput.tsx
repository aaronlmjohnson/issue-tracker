const FormInput = (props: any)=>{
    const styling = props.styling || "inline border border-gray-300";

    interface Option {
        value: string
        content: string
    }

    const selectInput = (optionsArr: Option[])=>{
        return (
            <select name={props.nameValue} id={props.nameValue} onChange={(e:any) => props.setter(e.target.value)} >
                {optionsArr.map((option)=> 
                    <option value={option.value} key={crypto.randomUUID()}>
                        {option.value}
                    </option>
                )}
            </select>
        )
    }

    const formInput = ()=>{
        return (
            <input className={styling} name={props.nameValue} type={props.type} onChange={(e:any) => props.setter(e.target.value)} />
        )
    }

    return (
        <div className= {props.classValue}>
            <label htmlFor={props.forValue}>{props.content}</label>
            {props.type === "select" ? selectInput(props.options) : formInput()}
        </div>
    );
}

export default FormInput;

