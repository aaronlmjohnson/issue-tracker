import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { useFetchData } from "../hooks/useFetchData";
import { ITicket } from "../lib/types";

import Ticket from './Ticket';
import TicketForm from "./TicketForm";

const AllProjectTickets = (props:any)=>{
    const { project } = props;
    const {data:tickets, loading:ticketsLoading, error } = useFetchData(`/projects/${project._id}/tickets`);
    const {activeForm, updateTarget, setActiveForm} = useActiveFormContext();
    
    return(
        !ticketsLoading && <div className="all-project-tickets-page">
            {tickets.map((ticket:ITicket)=> <Ticket ticket={ticket} project={project} key={ticket._id}/>)}
            <button onClick={()=> setActiveForm("create-ticket")}>New Ticket</button>
        </div>
    )
}

export default AllProjectTickets;
