import { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";

const AllTickets = ()=>{
    const {data:tickets, loading:ticketsLoading, error } = useFetchData("http://localhost:3001/tickets");
    const {data:author, loading:authorLoading, error:authorError, refetch:authorRefetch} = useFetchData("");


    const retrieveAuthorName = (id:string)=>{
        authorRefetch(`http://localhost:3001/users/${id}`);
    }
    
    const Ticket = (props:any)=>{
        const { ticket, author, authorRefetch, authorLoading } = props;

        useEffect(()=>{
            authorRefetch(`http://localhost:3001/users/${ticket.author}`);
            console.log(author);
        } ,[author])

        return (
            !authorLoading && <div className="ticket">
                <h1><a href="/tickets">{ticket.title}</a></h1>
                {/* <p>{author.username}</p> */}
                <p>{ticket.feature}</p>
                <p>{ticket.priority}</p>
                <p>{ticket.status}</p>
            </div>
        )
    }

    return(
        !ticketsLoading && <div className="all-tickets-page">
            {tickets.map((ticket:any)=> <Ticket ticket={ticket} author={author} authorRefetch={authorRefetch} authorLoading={authorLoading} key={ticket._id}/>)}
        </div>
    )
}

export default AllTickets;