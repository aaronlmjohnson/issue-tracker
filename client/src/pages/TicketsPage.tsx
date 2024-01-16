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
        
        <> 
            {!ticketsLoading && <div className="tickets-page p-7">
                {tickets.map((ticket:any)=> <Ticket ticket={ticket} setActiveTicket={setActiveTicket} key={ticket._id}/>)}
            </div>}
           <Outlet context={activeTicket}/>
        </>
    )
}

export default TicketsPage;