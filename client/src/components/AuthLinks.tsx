const AuthLinks = (props:any)=>{
    return(
        <div className="flex flex-col items-center">
                <p className="">
                    {props.firstContent[0]}
                    <a href={props.firstLink} className="text-primary font-bold">
                        {props.firstContent[1]}
                    </a>
                </p>
                <p className="">
                    {props.secondContent[0]}
                    <a href={props.secondLink} className="text-primary font-bold">
                        {props.secondContent[1]}
                    </a>
                </p>
        </div>
    )
}

export default AuthLinks;