import { useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import { useActiveFormContext } from '../hooks/useActiveFormContext';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

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
    
    return (
        !authorLoading && <button onClick={handleTicketDetail}>
            <ul className="ticket-listing">
                <li><p>{ticket.priority}</p></li>
                <li><h2>{ticket.title}</h2></li>
                <li><p>{ticket.feature}</p></li>
                <li><p>{ticket.date_created}</p></li>
                <li><p>{ticket.status}</p></li>
            </ul>
        </button>
    )
}

export default Ticket;