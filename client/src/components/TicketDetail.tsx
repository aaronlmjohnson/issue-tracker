import { useEffect } from "react";
import useTicketUpdateButton from "../hooks/useTicketUpdateButton";
import TicketForm from "./TicketForm";
import TicketDeleteButton from "./TicketDeleteButton";
import useProjectInfo from "../hooks/useProjectInfo";
// import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import { useActiveFormContext } from "../hooks/useActiveFormContext";

const TicketDetail = (props:any)=>{
    const {activeForm:ticket} = useActiveFormContext();
    const {isAuthed, isAuthedToEditTicket} = useCheckAuthorization();


    return(
        <div className="ticket-detail border-8 absolute">
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
        </div>
    )
}
//ticket.assignee.fullName || "Not Assigned"

export default TicketDetail;