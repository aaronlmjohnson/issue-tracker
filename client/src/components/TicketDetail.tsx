import { useEffect } from "react";
import useTicketUpdateButton from "../hooks/useTicketUpdateButton";
import TicketForm from "./TicketForm";
import TicketDeleteButton from "./TicketDeleteButton";
import useProjectInfo from "../hooks/useProjectInfo";
import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import useCheckAuthorization from "../hooks/useCheckAuthorization";

const TicketDetail = (props:any)=>{
    const {updateButton, cancelButton, setFormActive, formActive } = useTicketUpdateButton();
    const { ticket } = props;
    const {isAuthed, isAuthedToEditTicket} = useCheckAuthorization();
    let url = `http://localhost:3001/projects/${ticket.project._id}/tickets/${props.ticket._id}/delete`;
    const { display:showDeleteConfirmation, setDisplay, confirmationForm} = useDeleteConfirmation(url, ticket);

    useEffect(()=>{
        isAuthedToEditTicket(ticket);
    },[isAuthed]);
    const alterationButtons = ()=>{
        return (
            <>
                {formActive ? cancelButton() : updateButton()}
                <TicketDeleteButton project={ticket.project} ticket={ticket} setDisplay={setDisplay}/>
            </>
        );
    }

    return(
        <div className="ticket-detail">
            <h1>{ticket.title}</h1>
            <p>Added by: {ticket.author.fullName}</p>
            <p>Added on: {ticket.date_created}</p>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
            <p>{ticket.type}</p>
            <p>Assigned to: {ticket.assignee.fullName}</p>
            {isAuthed && alterationButtons()}
            {showDeleteConfirmation && confirmationForm()}
            {formActive && <TicketForm project = {ticket.project} ticket={ticket} method={"PATCH"}/>}
        </div>
    )
}

export default TicketDetail;