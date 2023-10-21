import { ReactEventHandler, useEffect, useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ComboBox from "./ComboBox";
import { useFetchData } from "../hooks/useFetchData";
import { useAuthContext } from "../hooks/useAuthContext";

const TicketForm = (props:any)=>{
    interface FormObj {
        title: string,
        description: string,
        project: any | null, //make interface for project
        author: any | null, //make interface for author
        priority: string,
        status: string,
        type: string,
        assignee: string[]
    }

    const { method, project } = props;
    const {data:projectOptions, loading:optionsLoading } = useFetchData("http://localhost:3001/projects/all-project-names");
    const {data:ticketEnums, loading:enumsLoading} = useFetchData("http://localhost:3001/tickets/ticket-enums")
    const { user } = useAuthContext();
    const [form, setForm ] = useState<FormObj>({
        title:"",
        description:"",
        project:project ? project._id : null,
        author:user ? user.user._id : null,
        priority: "",
        status:"",
        type:"",
        assignee:[]
    });

    useEffect(()=>{
        console.log(form);
    }, [form])

    const handleFormChange = (e:any, formProperty:any)=>{
        setForm({...form, [formProperty]: e.target.value});
    }
    
    return (
        !optionsLoading && !enumsLoading && <form method={method} >
            <TextInput 
                forValue={"ticket-title"}
                label={"Title:"}
                value={form.title}
                setter={(e:Event)=> handleFormChange(e, "title")}
            />

            <TextArea 
                forValue={"ticket-description"}
                label={"Description: "}
                value={form.description}
                setter={(e:Event)=> handleFormChange(e, "description")}
            />

            <ComboBox 
                    forValue={"ticket-project-name"}
                    options={projectOptions}
                    optionsKey={"title"}
                    selected = {form.project}
                    setter={(e:Event)=> handleFormChange(e, "project")}
                    disabled = {true}
            />

            <ComboBox 
                    forValue={"ticket-priority"}
                    options={ticketEnums.priorities}
                    selected = {form.priority}
                    setter={(e:Event)=> handleFormChange(e, "priority")}
                    disabled = {false}
            />
            <ComboBox 
                    forValue={"ticket-status"}
                    options={ticketEnums.statuses}
                    selected = {form.status}
                    setter={(e:Event)=> handleFormChange(e, "status")}
                    disabled = {false}
            />
            <ComboBox 
                    forValue={"ticket-type"}
                    options={ticketEnums.types}
                    selected = {form.type}
                    setter={(e:Event)=> handleFormChange(e, "type")}
                    disabled = {false}
            />
        </form>
    )
}

export default TicketForm;