import { TFormObject } from "../lib/types"

interface IFormProps {
    formObj: TFormObject,
    title:string,
    method:string,
    inputs: JSX.Element[],
    handleSubmit: (e: any) => void
}

const FormElement = (props:IFormProps)=>{

    const {method, inputs, handleSubmit} = props;

    return(
        <div className="flex flex-col gap-3 p-8 items-center fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white md:h-fit h-full overflow-scroll">
            <h1 className="font-primary text-primary text-2xl font-bold">{props.title}</h1>
            <form method={method} className="flex flex-col gap-8" onSubmit={handleSubmit}>
                {inputs}
            </form>
        </div>
    )
}   

export default FormElement;