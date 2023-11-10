const SubmitButton = (props:any)=>{
    return (
        <button className="bg-primary text-white w-auto h-12 p-2.5 rounded">
            {props.content}
        </button>
    )
}

export default SubmitButton;