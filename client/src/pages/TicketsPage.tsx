import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import Ticket from '../components/Ticket';
import TicketForm from "../components/TicketForm";
import { Outlet } from "react-router-dom";

const TicketsPage = ()=>{
    const {data:tickets, loading:ticketsLoading, error } = useFetchData("/tickets");
    const [activeTicket, setActiveTicket] = useState(null); //maybe utilize active form instead of active ticket so I can update styling on tickets page

    useEffect(()=>{
        console.log(activeTicket);
    }, [activeTicket])
    return(
        
        <div className={`${activeTicket ? "bg-black" : ""}`}> 
            {!ticketsLoading && <div className="all-tickets-page">
                {tickets.map((ticket:any)=> <Ticket ticket={ticket} setActiveTicket={setActiveTicket} key={ticket._id}/>)}
            </div>}
           <Outlet context={activeTicket}/>
        </div>
    )
}

export default TicketsPage;