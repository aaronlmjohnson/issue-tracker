import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = ()=>{
    const { user } = useAuthContext();
    const { logout } = useLogout();
    return(
        <nav className="border-b-4 border-t-0 border-x-0  border-black">
            <p className=""><a href="/">Home</a></p>
            <p className=""><a href="/projects">Projects</a></p>
            {user ? <p>Logged in As: {user.user.username}</p> : <></>}
            {user && <button onClick={logout}>Log out</button>}
            {!user && <p><a href="/login">Sign in</a></p>}
            {!user && <p><a href="/sign-up">Sign Up</a></p>}
        </nav>
    )
}

export default Navbar;