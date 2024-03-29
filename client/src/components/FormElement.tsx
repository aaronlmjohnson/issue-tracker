import { TFormObject } from "../lib/types"

interface IFormProps {
    formObj: TFormObject,
    title:string,
    method:string,
    inputs: JSX.Element[],
    formStyle: "large" | "small",
    handleSubmit: (e: any) => void
}

const FormElement = (props:IFormProps)=>{

    const {method, inputs, handleSubmit, formStyle} = props;
    const smallStyle = "flex flex-col gap-8";
    const largeStyle = "grid p-8 grid-cols-2 gap-4"
    return( 
        <div className={`form-element z-50`}>
            <h1 className="font-primary text-primary text-2xl font-bold">{props.title}</h1>
            <form method={method} className={`${formStyle === "large" ? largeStyle : smallStyle}`} onSubmit={handleSubmit}>
                {inputs}
            </form>
        </div>
    )
}   

export default FormElement;