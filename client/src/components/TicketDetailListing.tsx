
interface IProps {
    label:string,
    value:string
}
const TicketDetailListing = (props:IProps)=>{
    return (
        <li className={`ticket-detail-listing${props.label === "Notes" ? "-notes" : ""}`}>
            <p className="ticket-detail-label">{props.label}</p>
            <p>{props.value}</p>
        </li>
    )
}

export default TicketDetailListing;