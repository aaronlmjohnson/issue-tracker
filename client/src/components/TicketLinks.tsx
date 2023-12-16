import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { Link } from "react-router-dom";

const TicketLinks = ()=>{
    const {setActiveForm} = useActiveFormContext();
    return(
        <ul>
            <li>
                <Link to={"/tickets"}>All</Link>
            </li>
            <li>
                <button onClick={()=>{setActiveForm("create-ticket")}}>Add</button>
            </li>
        </ul>
    )
}

export default TicketLinks;