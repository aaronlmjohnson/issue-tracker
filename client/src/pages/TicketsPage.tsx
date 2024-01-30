import { useFetchData } from "../hooks/useFetchData";
import Ticket from '../components/Ticket';
import { Outlet } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import ContentLoading from "./ContentLoading";
const TicketsPage = ()=>{
    const {data:tickets, loading:ticketsLoading } = useFetchData("/tickets");
    const {activeDetail:activeTicket, setActiveDetail:setActiveTicket} = useActiveFormContext();

    return(   
        //sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10
        <> 
            {ticketsLoading ?
            <ContentLoading backgroundColor="bg-white" /> :
            <div className="tickets-page p-7">
                <h1 className="font-primary text-5xl font-extrabold col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4  pb-7">All Tickets</h1>
                {
                    tickets.map((ticket:any)=> <Ticket ticket={ticket} setActiveTicket={setActiveTicket} key={ticket._id}/>)
                }
            </div>}
           <Outlet context={activeTicket}/>
        </>
    )
}

export default TicketsPage;