interface IProps {
    content: string
    handler: (e:React.MouseEvent<HTMLElement>)=> void
}

const FormButton = (props:IProps)=>{

    const {content, handler} = props;

    return (
        <button className="button-one" onClick={handler}>
            {props.content}
        </button>
    )
}

export default FormButton;