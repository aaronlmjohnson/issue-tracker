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

    const textArea = ()=>{
        return (
            <textarea className={styling} name={props.nameValue} onChange={(e:any)=> props.setter(e.target.value)} rows={props.rows} cols={props.cols}></textarea>
        )
    }

    const checkBoxes = ()=>{
        return (
                <fieldset>
                    <legend>{props.legend}</legend>
                    <div>
                        {props.checkboxes.map((checkbox: any)=>{   
                           return ( 
                                <div className="checkbox" key={crypto.randomUUID()}>
                                    <input type="checkbox"  name={checkbox.name} />
                                    <label htmlFor={checkbox.name}>{checkbox[props.labelKey]}</label>
                                </div>
                            );
                        })}
                        
                    </div>
                </fieldset>
        )
    }

    return (
        <div className= {props.classValue + "form-input-container my-6"}>
            <label htmlFor={props.forValue} className={ props.labelStyle || "text-white font-secondary block"}>{props.content}</label>
            {
                (props.type === "select" && selectInput(props.options)) ||
                (props.type === "textarea" && textArea()) ||
                (props.type === "checkbox" && checkBoxes()) ||
                (formInput())
            }
        </div>
    );
}

export default FormInput;

