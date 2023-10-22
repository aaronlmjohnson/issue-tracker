import { useEffect } from "react";
import useTicketUpdateButton from "../hooks/useTicketUpdateButton";
import TicketForm from "./TicketForm";

const TicketDetail = (props:any)=>{
    const {updateButton, cancelButton, setFormActive, formActive } = useTicketUpdateButton();
    const { ticket, project } = props;

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
            {formActive ? cancelButton() : updateButton()}
            {formActive && <TicketForm project = {project} ticket={ticket} method={"PATCH"}/>}
        </div>
    )
}

export default TicketDetail;