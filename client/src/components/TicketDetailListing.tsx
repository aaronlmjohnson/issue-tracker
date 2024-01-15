
interface IProps {
    label:string,
    value:string
}
const TicketDetailListing = (props:IProps)=>{
    return (
        <li>
            <p>{props.label}</p>
            <p>{props.value}</p>
        </li>
    )
}

export default TicketDetailListing;