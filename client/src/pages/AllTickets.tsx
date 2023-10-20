import { useFetchData } from "../hooks/useFetchData";

const AllTickets = ()=>{

    const {data:tickets, loading, error } = useFetchData("http://localhost:3001/tickets")
    
    const Ticket = (props:any)=>{
        const { ticket } = props;
        return (
            <div className="ticket">
                <h1><a href="/tickets">{ticket.title}</a></h1>
                <p>{ticket.author}</p>
                <p>{ticket.feature}</p>
                <p>{ticket.priority}</p>
                <p>{ticket.status}</p>
            </div>
        )
    }

    return(
        !loading && <div className="all-tickets-page">
            {tickets.map((ticket:any)=> <Ticket ticket={ticket} key={ticket._id}/>)}
        </div>
    )
}

export default AllTickets;