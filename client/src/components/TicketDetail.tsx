import { useEffect } from "react";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import CancelButton from "./CancelButton";
import { useNavigate, useParams } from "react-router-dom";
import UpdateButton from "./UpdateButton";
import date from "date-and-time";
import TicketDetailListing from "./TicketDetailListing";

const TicketDetail = (props:any)=>{
    const {activeDetail:ticket} = useActiveFormContext();
    const {isAuthed, isAuthedToEditTicket} = useCheckAuthorization();
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!ticket) 
            navigate(params.projectId ? `/projects/${params.projectId}` : "/tickets");
    }, [ticket]);

    return(
        ticket?.type === "ticket" && <ul className="ticket-detail center-screen">
            <h2 className="text-primary text-2xl font-bold">{ticket.title}</h2>
            <TicketDetailListing 
                label={"Posted By"} 
                value={ticket.author.fullName}
            />
            <TicketDetailListing 
                label={"Date Added"} 
                value={date.format( new Date(ticket.date_created), 'MMMM DD, YYYY')}
            />
            <TicketDetailListing 
                label={"Priority"} 
                value={ticket.priority}
            />
            <TicketDetailListing 
                label={"Status"} 
                value={ticket.status}
            />
            <TicketDetailListing 
                label={"Type"} 
                value={ticket.ticketType}
            />
            {ticket.assignee && <TicketDetailListing 
                label={"Assigned to"} 
                value={ticket.assignee?.fullName}
            />}
            <TicketDetailListing 
                label={"Notes"} 
                value={ticket.description}
            />
            <div className="flex gap-x-4">
                <UpdateButton formName={"update-ticket"} formObj = {ticket} />
                <CancelButton />
            </div>           
            
        </ul>
    )
}
//ticket.assignee.fullName || "Not Assigned"

export default TicketDetail;