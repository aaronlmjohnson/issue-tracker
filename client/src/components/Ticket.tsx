import { useEffect, useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import TicketDetail from './TicketDetail';
import { Outlet, useNavigate } from 'react-router-dom';
import { useActiveFormContext } from '../hooks/useActiveFormContext';
import { useParams } from 'react-router-dom';

const Ticket = (props:any)=>{
    const { ticket, setActiveTicket } = props;
    const {activeDetail, setActiveDetail} = useActiveFormContext();

    const {data:author, loading:authorLoading} = useFetchData(`/users/${ticket.author._id}`);
    const [toggleDetail, setToggleDetail] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    const handleTicketDetail = ()=>{
        setActiveDetail(ticket);
        //check and see if path includes project id
        if(params.projectId) navigate(`tickets/${ticket._id}`);
        else navigate(`/tickets/${ticket._id}`)
    }
    
    return (
        !authorLoading && <div className="ticket">
            <button onClick={handleTicketDetail}>{ticket.title}</button>
            <p>{author.username}</p>
            <p>{ticket.feature}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.status}</p>
            {/* <Outlet context={ticket}/> */}
        </div>
    )
}

export default Ticket;