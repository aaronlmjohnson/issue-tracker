import { useEffect } from "react";
import useCheckAuthorization from "../hooks/useCheckAuthorization";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import CancelButton from "./CancelButton";
import { useNavigate, useParams } from "react-router-dom";
import UpdateButton from "./UpdateButton";
import date from "date-and-time";
import TicketDetailListing from "./TicketDetailListing";
import DeleteButton from "./DeleteButton";

const TicketDetail = (props:any)=>{
    const {activeDetail:ticket, activeForm} = useActiveFormContext();
    const {isAuthed, isAuthedToEditTicket} = useCheckAuthorization();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(ticket) isAuthedToEditTicket(ticket);
        if(!ticket) 
            navigate(params.projectId ? `/projects/${params.projectId}` : "/tickets");
    }, [ticket]);

    return(
        ticket?.type === "ticket" && <ul className={`ticket-detail center-screen  ${activeForm === "delete-confirmation" ? "hidden" : "flex"}flex-col `}>
            <li className="w-fit">
                <h2 className="text-primary text-2xl font-bold w-fit">{ticket.title}</h2>
            </li>
            
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
            <li className="flex gap-x-4 w-1/2">
                {isAuthed &&<UpdateButton formName={"update-ticket"} formObj = {ticket} />}
                {isAuthed &&<DeleteButton  obj = {ticket} url={`/projects/${ticket.project._id}/tickets/${ticket._id}/delete`} />}

                <CancelButton />
            </li>
        </ul>
    )
}

export default TicketDetail;