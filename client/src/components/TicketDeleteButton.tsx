// import useDeleteConfirmation from "../hooks/useDeleteConfirmation";
import { useParams } from "react-router-dom";

 const TicketDeleteButton = (props:any)=> {

    const handleDelete = ()=> {
        props.setDisplay(true);
        //submitForm(props.ticket, `http://localhost:3001/projects/${props.project._id}/tickets/${props.ticket._id}/delete`, "DELETE");
    };

    return(
        <button className="ticket-delete-button" onClick={handleDelete}>
            Delete
        </button>
    )
}

export default TicketDeleteButton;
