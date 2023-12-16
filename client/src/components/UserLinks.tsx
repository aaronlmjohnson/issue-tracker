import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { Link } from "react-router-dom";

const UserLinks = ()=>{
    const {setActiveForm} = useActiveFormContext();

        return(
            <ul>
                <li>
                    <Link to={"/users"}>All</Link>
                </li>
            </ul>
        )
}

export default UserLinks;