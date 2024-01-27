import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import FormDisplay from "../components/FormDisplay";
import { useAuthContext } from "../hooks/useAuthContext";


const Root = ()=>{
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const { user, loading:userLoading } = useAuthContext();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!userLoading)
            if(!user) navigate("/login");
    }, [user, userLoading]);
    
    const {activeForm, activeDetail} = useActiveFormContext();
    return (
        !userLoading && user &&
        <>
            {((activeForm !== "none") || activeDetail)
             && <div className={`absolute top-0 left-0 bg-black/60 w-screen h-screen z-50 hidden sm:block`}></div>}
            <div className="flex ">
                <Sidebar 
                    sidebarVisible={sidebarVisible}
                />
                <div className={`flex flex-col w-screen ${(activeForm !== "none" || activeDetail)? "h-screen overflow-hidden" : ""}`}>
                    <Navbar 
                        setSidebarVisible={setSidebarVisible}
                    />
                    <Outlet  />
                </div>
                <FormDisplay />
            </div>
        </> 
    );
}

export default Root;