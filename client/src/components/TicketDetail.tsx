import { useEffect } from "react";
import useTicketUpdateButton from "../hooks/useTicketUpdateButton";
import TicketForm from "./TicketForm";
import TicketDeleteButton from "./TicketDeleteButton";
import useProjectInfo from "../hooks/useProjectInfo";
import useDeleteConfirmation from "../hooks/useDeleteConfirmation";

const TicketDetail = (props:any)=>{
    const {updateButton, cancelButton, setFormActive, formActive } = useTicketUpdateButton();
    const { ticket } = props;
    let url = `http://localhost:3001/projects/${ticket.project._id}/tickets/${props.ticket._id}/delete`;
    const { display:showDeleteConfirmation, setDisplay, confirmationForm} = useDeleteConfirmation(url, ticket);

    return(
        <div className="ticket-detail">
            <h1>{ticket.title}</h1>
            <p>{ticket.author.fullName}</p>
            <p>{ticket.date_created}</p>
            <p>{ticket.description}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.status}</p>
            <p>{ticket.type}</p>
            <p>{ticket.assignee.fullName}</p>
            {formActive ? cancelButton() : updateButton()}
            <TicketDeleteButton project={ticket.project} ticket={ticket} setDisplay={setDisplay}/>
            {showDeleteConfirmation && confirmationForm()}
            {formActive && <TicketForm project = {ticket.project} ticket={ticket} method={"PATCH"}/>}
        </div>
    )
}

export default TicketDetail;