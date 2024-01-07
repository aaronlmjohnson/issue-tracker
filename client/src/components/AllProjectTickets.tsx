import { useFetchData } from "../hooks/useFetchData";
import { ITicket } from "../lib/types";

import Ticket from './Ticket';

const AllProjectTickets = (props:any)=>{
    const { project } = props;
    const {data:tickets, loading:ticketsLoading, error } = useFetchData(`/projects/${project._id}/tickets`);
    
    return(
        !ticketsLoading && <div className="all-project-tickets-page">
            {tickets.map((ticket:ITicket)=> <Ticket ticket={ticket} project={project} key={ticket._id}/>)}
        </div>
    )
}

export default AllProjectTickets;
