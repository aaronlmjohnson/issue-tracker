import { useFetchData } from "../hooks/useFetchData";
import Ticket from '../components/Ticket';
import { Outlet } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import ContentLoading from "./ContentLoading";
const TicketsPage = ()=>{
    const {data:tickets, loading:ticketsLoading } = useFetchData("/tickets");
    const {activeDetail:activeTicket, setActiveDetail:setActiveTicket} = useActiveFormContext();

    return(
        <> 
            {ticketsLoading ?
            <ContentLoading backgroundColor="bg-white" /> :
            <div className="tickets-page p-7">
                {tickets.map((ticket:any)=> <Ticket ticket={ticket} setActiveTicket={setActiveTicket} key={ticket._id}/>)}
            </div>}
           <Outlet context={activeTicket}/>
        </>
    )
}

export default TicketsPage;