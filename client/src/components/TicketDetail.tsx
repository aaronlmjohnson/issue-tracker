import { useEffect } from "react";

const TicketDetail = (props:any)=>{

    const { ticket } = props;

    return(
        <div className="ticket-detail">
            <h1>{ticket.title}</h1>
            <p>{ticket.author}</p>
            <p>{ticket.date_created}</p>
            <p>{ticket.description}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.status}</p>
            <p>{ticket.type}</p>
            <p>{ticket.assignee}</p>
        </div>
    )
}

export default TicketDetail;