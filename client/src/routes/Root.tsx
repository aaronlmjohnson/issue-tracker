import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import FormDisplay from "../components/FormDisplay";

const Root = ()=>{

   
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const {activeForm} = useActiveFormContext();

    useEffect(()=>{
        console.log(activeForm);
    },[activeForm])


    return (
        <>
            <div className={`absolute top-0 left-0 bg-black/60 w-screen h-screen z-10  ${activeForm === "none" ? 'hidden' : ''}`}></div> 
            <div className="flex ">
                <Sidebar 
                    sidebarVisible={sidebarVisible}
                />
                <div className="flex flex-col w-screen">
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