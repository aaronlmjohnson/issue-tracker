import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";

const Root = ()=>{
    // need to know what links to pass to Sidebar
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const {activeForm} = useActiveFormContext();
    
    const linkHandler = ()=>{
        const path = window.location.pathname;
        const projectsRe = /\/projects(.+)?/;
        const usersRe = /\/users(.+)?/;
        const ticketsRe = /\/tickets(.+)?/;
        let links = null;
        let section = null;

        if(projectsRe.test(path)){
            links = ["Add"];
            section = "Projects";
        }else if(usersRe.test(path)){
            links = [""];
            section = "Users";
        }else if(ticketsRe.test(path)){
            links = ["Add"];
            section = "Tickets";
        }else{
            links = [""];
            section = "Dashboard";
        }
        return {links, section}
    }
    const content = linkHandler();
    return (
        <div className="flex">
            <div className={` bg-black/60 w-full h-full fixed ${activeForm === "none" ? 'hidden' : ''}`}></div>
            <Sidebar 
                section={content.section}
                links={content.links}
                sidebarVisible={sidebarVisible}
            />
            <div className="flex flex-col w-screen h-screen">
                <Navbar 
                    setSidebarVisible={setSidebarVisible}
                />
                <Outlet  />
            </div>
            
        </div>
            
    );
}

export default Root;