import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

const UserDetail = (props:any)=>{
    const { userId } = useParams();
    const {data:user, loading} = useFetchData(`http://localhost:3001/users/${userId}`);

    return(
        !loading && <div className="ticket-detail">
            <h1>{user.fullName}</h1>
            <p className="date-created">{user.date_created}</p>
            <p className="email">{user.email}</p>
            <p className="role">{user.role}</p>
            <h2>{user.role === "Project Lead" ? "Projects Leading" :  user.role === "Developer" ? "Projects Working On" : ""}</h2>
            {/* Need to display tickets created, projects assigned/projects leading/ display tickets */}
        </div>
    );
}

export default UserDetail;