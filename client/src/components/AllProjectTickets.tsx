import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { useFetchData } from "../hooks/useFetchData";
import { ITicket } from "../lib/types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import Ticket from './Ticket';
import TicketForm from "./TicketForm";

const AllProjectTickets = (props:any)=>{
    const { project } = props;
    const {data:tickets, loading:ticketsLoading, error } = useFetchData(`/projects/${project._id}/tickets`);
    const {activeForm, updateTarget, setActiveForm} = useActiveFormContext();
    
    return(
        !ticketsLoading && <div className="tickets-page">
            {tickets.map((ticket:ITicket)=> <Ticket ticket={ticket} project={project} key={ticket._id}/>)}
            <button className="flex gap-y-4 justify-center items-center flex-col bg-white drop-shadow-lg" onClick={()=> setActiveForm("create-ticket")}>
                <p className="text-2xl font-bold text-gray-400">
                    New Ticket
                </p>
                <FontAwesomeIcon className="text-3xl font-bold text-gray-400" icon={faPlus}/>
            </button>
        </div>
    )
}

export default AllProjectTickets;
