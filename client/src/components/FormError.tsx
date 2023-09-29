
interface PropsType{
    error: string
}
const FormError = (props: PropsType)=>{
    return (
    <div className = "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-auto" role="alert">
        <h1>{props.error}</h1>
    </div>);
}

export default FormError;