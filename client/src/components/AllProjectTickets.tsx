import { useFetchData } from "../hooks/useFetchData";

import Ticket from './Ticket';

const AllProjectTickets = (props:any)=>{
    const { project } = props;
    const {data:tickets, loading:ticketsLoading, error } = useFetchData(`http://localhost:3001/projects/${project._id}/tickets`);
    
    return(
        !ticketsLoading && <div className="all-project-tickets-page">
            {tickets.map((ticket:any)=> <Ticket ticket={ticket} project={project} key={ticket._id}/>)}
        </div>
    )
}

export default AllProjectTickets;