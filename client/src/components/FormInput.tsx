const FormInput = (props: any)=>{
    const styling = props.styling || "block bg-transparent border font-secondary text-white text-2xl p-2 rounded-2xl";

    interface Option {
        value: string
        content: string
    }

    const selectInput = (optionsArr: Option[])=>{
        return (
            <select className="p-2 bg-transparent border text-white"name={props.nameValue } id={props.nameValue} onSelect={(e:any) => props.setter(e.target.value)} >
                {optionsArr.map((option)=> 
                    <option className="bg-primary" value={option.value} key={crypto.randomUUID()}>
                        {option.value}
                    </option>
                )}
            </select>
        )
    }

    const formInput = ()=>{
        return (
            <input className={styling } name={props.nameValue} type={props.type} onChange={(e:any) => props.setter(e.target.value)} />
        )
    }

    return (
        <div className= {props.classValue + "form-input-container my-6"}>
            <label htmlFor={props.forValue} className="text-white font-secondary block">{props.content}</label>
            {props.type === "select" ? selectInput(props.options) : formInput()}
        </div>
    );
}

export default FormInput;

