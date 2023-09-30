import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Dashboard = ()=>{
    const {user} = useAuthContext();
    const {logout} = useLogout();
    return (
        <div className="dashboard ">
            <nav className="nav-bar h-12 border border-primary border-r-0 border-l-0 border-t-0 flex justify-end">
                <div className="auth-status text-sm flex gap-x-2">
                    {user && <p>Logged in As: {user.user.username}</p>}
                    {user && <button onClick={logout}>Log out</button>}
                    {!user && <p><a href="/login">Sign in</a></p>}
                </div>
            </nav>
            <h1 className="text-3xl font-bold underline">Dashboard</h1>
        </div>
    );
}

export default Dashboard;

