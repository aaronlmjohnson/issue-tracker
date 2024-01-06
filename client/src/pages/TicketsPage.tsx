import { useEffect } from "react";
import { useFetchData } from "../hooks/useFetchData";
import Ticket from '../components/Ticket';
import TicketForm from "../components/TicketForm";

const AllTickets = ()=>{
    const {data:tickets, loading:ticketsLoading, error } = useFetchData("/tickets");
    return(
        !ticketsLoading && <div className="all-tickets-page">
            {tickets.map((ticket:any)=> <Ticket ticket={ticket} key={ticket._id}/>)}
        </div>
    )
}

export default AllTickets;