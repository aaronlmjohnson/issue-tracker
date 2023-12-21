interface IProps {
    submitStyle: string
    content: string
}

const SubmitButton = (props:IProps)=>{

    const {content, submitStyle} = props;

    return (
        <button className={submitStyle}>
            {props.content}
        </button>
    )
}

export default SubmitButton;