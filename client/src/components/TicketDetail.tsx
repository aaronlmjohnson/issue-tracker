import { useEffect } from "react";
import useTicketUpdateButton from "../hooks/useTicketUpdateButton";
import TicketForm from "./TicketForm";
import TicketDeleteButton from "./TicketDeleteButton";
import useProjectInfo from "../hooks/useProjectInfo";
// import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import CancelButton from "./CancelButton";
import { useNavigate, useParams } from "react-router-dom";
import UpdateButton from "./UpdateButton";

const TicketDetail = (props:any)=>{
    const {activeDetail:ticket} = useActiveFormContext();
    const {isAuthed, isAuthedToEditTicket} = useCheckAuthorization();
    const params = useParams();

    const navigate = useNavigate();
    useEffect(()=>{
        if(!ticket) 
            navigate(params.projectId ? `/projects/${params.projectId}` : "/tickets");
    }, [ticket])

    return(
        ticket?.type === "ticket" && <div className="ticket-detail border-8 absolute z-50 bg-white top-1/3 left-1/2 -translate-y-1/3 -translate-x-1/2">
            <h1>{ticket.title}</h1>
            <p>Added by: {ticket.author.fullName}</p>
            <p>Added on: {ticket.date_created}</p>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
            <p>{ticket.ticketType}</p>
            <p>Assigned to: {ticket.assignee ? ticket.assignee.fullName : "Unassigned"}</p> 
            <CancelButton />
            <UpdateButton formName={"update-ticket"} formObj = {ticket} />
        </div>
    )
}
//ticket.assignee.fullName || "Not Assigned"

export default TicketDetail;