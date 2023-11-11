import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Root = ()=>{
    // need to know what links to pass to Sidebar
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
            <Sidebar 
                section={content.section}
                links={content.links}
            />
            <div className="flex flex-col w-screen h-screen">
                <Navbar />
                <Outlet  />
            </div>
            
        </div>
            
    );
}

export default Root;