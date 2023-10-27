import { useFetchData } from "../hooks/useFetchData";

const UsersPage = (props:any)=>{
    const {data:users, loading} = useFetchData(`http://localhost:3001/users`);

    return(
        !loading && <div className="ticket-detail">
            {users.map((user:any)=>{
                return <div key={user.id}>
                    <h1><a href={user.url}>{user.fullName}</a></h1>
                    <p className="role">{user.role}</p>
                </div>
            })}
        </div>
    );
}

export default UsersPage;