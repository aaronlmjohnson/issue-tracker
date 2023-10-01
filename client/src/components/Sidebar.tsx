const Sidebar = (props:any)=>{
    return (
        <div className="sidebar h-sidebar w-1/5 border border-primary border-b-0 border-l-0 border-t-0 flex flex-col">
            {props.links.map((link:any)=>
                (<a href={link.url}>{link.name}</a>)
            )}
        </div>
    )
}

export default Sidebar