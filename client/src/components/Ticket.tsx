import { useEffect, useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import TicketDetail from './TicketDetail';

const Ticket = (props:any)=>{
    const { ticket } = props;


    const {data:author, loading:authorLoading} = useFetchData(`/users/${ticket.author._id}`);
    const [toggleDetail, setToggleDetail] = useState(false);

    const handleTicketDetail = ()=>{
        setToggleDetail((prevState:any) => prevState ? false : true);
    }
    
    return (
        !authorLoading && <div className="ticket">
            <button onClick={handleTicketDetail}>{ticket.title}</button>
            <p>{author.username}</p>
            <p>{ticket.feature}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.status}</p>
            {toggleDetail && <TicketDetail ticket = {ticket} />}
        </div>
    )
}

export default Ticket;