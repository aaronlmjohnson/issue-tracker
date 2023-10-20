import { useFetchData } from '../hooks/useFetchData';

const Ticket = (props:any)=>{
    const { ticket } = props;
    const {data:author, loading:authorLoading} = useFetchData(`http://localhost:3001/users/${ticket.author}`);

    return (
        !authorLoading && <div className="ticket">
            <h1><a href="/tickets">{ticket.title}</a></h1>
            <p>{author.username}</p>
            <p>{ticket.feature}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.status}</p>
        </div>
    )
}

export default Ticket;