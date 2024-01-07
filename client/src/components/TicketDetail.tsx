import { useEffect } from "react";
import useTicketUpdateButton from "../hooks/useTicketUpdateButton";
import TicketForm from "./TicketForm";
import TicketDeleteButton from "./TicketDeleteButton";
import useProjectInfo from "../hooks/useProjectInfo";
// import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import CancelButton from "./CancelButton";
import { useNavigate } from "react-router-dom";

interface IProps {
}

const TicketDetail = (props:any)=>{
    const {activeDetail:ticket} = useActiveFormContext();
    const {isAuthed, isAuthedToEditTicket} = useCheckAuthorization();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!ticket) navigate("/tickets");
        console.log(ticket?.kind);
        console.log(ticket);
    }, [ticket])

    return(
        ticket && <div className="ticket-detail border-8 absolute">

            {/* <h1>{ticket.title}</h1>
            <p>Added by: {ticket.author.fullName}</p>
            <p>Added on: {ticket.date_created}</p>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
            <p>{ticket.type}</p>
            <p>Assigned to: {ticket.assignee ? ticket.assignee.fullName : "Unassigned"}</p>
            {isAuthed && alterationButtons()}
            {/* {showDeleteConfirmation && confirmationForm()} */}
            {/* {formActive && <TicketForm project = {ticket.project} ticket={ticket} method={"PATCH"}/>} */} 
            <CancelButton />
        </div>
    )
}
//ticket.assignee.fullName || "Not Assigned"

export default TicketDetail;