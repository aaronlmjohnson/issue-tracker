import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";
import date from 'date-and-time';

const UserDetail = (props:any)=>{
    const { userId } = useParams();
    const {data:user, loading} = useFetchData(`http://localhost:3001/users/${userId}`);

    return(
        !loading && <div className="p-7 flex flex-col gap-5">
            <h1 className="text-5xl font-semibold">{user.fullName}</h1>
            <p className="date-created"><span className="font-semibold">Joined on : </span>{date.format(new Date(user.date_created), "ddd, MMM DD, YYYY")}</p>
            <p className="email"><span className="font-semibold">Email: </span>{user.email}</p>
            <p className="role"><span className="font-semibold">Role: </span>{user.role}</p>
            <h2>{user.role === "Project Lead" ? "Projects Leading" :  user.role === "Developer" ? "Projects Working On" : ""}</h2>
            {/* Need to display tickets created, projects assigned/projects leading/ display tickets */}
        </div>
    );
}

export default UserDetail;