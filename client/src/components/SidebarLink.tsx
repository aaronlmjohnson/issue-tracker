const SidebarLink = (props:any)=>{
    return (
        <li>
            <a href={props.url}>
                {props.name}
            </a>
        </li>
    )
}

export default SidebarLink;