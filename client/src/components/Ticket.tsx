import { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import { useActiveFormContext } from '../hooks/useActiveFormContext';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import date from "date-and-time";

const Ticket = (props:any)=>{
    const { ticket, setActiveTicket } = props;
    const {activeDetail, setActiveDetail} = useActiveFormContext();

    const {data:author, loading:authorLoading} = useFetchData(`/users/${ticket.author._id}`);
    const navigate = useNavigate();
    const params = useParams();

    const handleTicketDetail = ()=>{
        setActiveDetail(ticket);
        //check and see if path includes project id
        if(params.projectId) navigate(`tickets/${ticket._id}`);
        else navigate(`/tickets/${ticket._id}`)
    }

    const handlePriority = ()=>{
        if(ticket.priority === "High") return "text-high-priority"
        if(ticket.priority === "Medium") return "text-med-priority"
        if(ticket.priority === "Low") return "text-low-priority"
    }
    
    return (
        !authorLoading && <button onClick={handleTicketDetail}>
            <ul className="ticket-listing">
                <li>
                    <FontAwesomeIcon icon={faCircle} className={handlePriority()}/>
                </li>
                <li className="row-start-2 col-start-2">
                    <h2 className="font-bold text-left">{ticket.title}</h2>
                </li>
                <li className="row-start-3 col-start-2 text-xs text-left">
                    <p>{date.format( new Date(ticket.date_created), 'MMMM DD, YYYY')}</p>
                </li>
                <li className="row-start-4 col-start-2 w-fit text-xs text-left">
                    <p>{ticket.status}</p>
                </li>
            </ul>
        </button>
    )
}

export default Ticket;