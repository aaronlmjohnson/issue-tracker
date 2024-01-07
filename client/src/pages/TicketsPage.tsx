import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import Ticket from '../components/Ticket';
import TicketForm from "../components/TicketForm";
import { Outlet } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";

const TicketsPage = ()=>{
    const {data:tickets, loading:ticketsLoading, error } = useFetchData("/tickets");
    const {activeDetail:activeTicket, setActiveDetail:setActiveTicket} = useActiveFormContext();

    return(
        
        <div> 
            {!ticketsLoading && <div className="all-tickets-page">
                {tickets.map((ticket:any)=> <Ticket ticket={ticket} setActiveTicket={setActiveTicket} key={ticket._id}/>)}
            </div>}
           <Outlet context={activeTicket}/>
        </div>
    )
}

export default TicketsPage;