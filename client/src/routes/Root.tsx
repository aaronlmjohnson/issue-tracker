import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = ()=>{
    return (
        <div className="flex">
            <Navbar />
            <Outlet />
        </div>
            
    );
}

export default Root;