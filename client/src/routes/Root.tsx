import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import FormDisplay from "../components/FormDisplay";

const Root = ()=>{
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const {activeForm} = useActiveFormContext();

    const sectionName = ()=>{
        const path = window.location.pathname;
        if(/\/projects(.+)?/.test(path)) return "Projects";
        else if(/\/users(.+)?/.test(path)) return "Users";
        else if(/\/tickets(.+)?/.test(path)) return "Tickets";
        else return "Dashboard";
    }

    return (
        <div className="flex">
            <div className={` bg-black/60 w-full h-full fixed ${activeForm === "none" ? 'hidden' : ''}`}></div>
            <Sidebar 
                section={sectionName()}
                sidebarVisible={sidebarVisible}
            />
            <div className="flex flex-col w-screen h-screen">
                <Navbar 
                    setSidebarVisible={setSidebarVisible}
                />
                <Outlet  />
            </div>
            <FormDisplay />
        </div>
            
    );
}

export default Root;