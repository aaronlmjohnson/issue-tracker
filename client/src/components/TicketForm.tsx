import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ComboBox from "./ComboBox";
import { useFetchData } from "../hooks/useFetchData";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFormSubmit } from "../hooks/useFormSubmit";

const TicketForm = (props:any)=>{
    interface FormObj {
        title: string,
        description: string,
        project: any | null, //make interface for project
        author: any | null, //make interface for author
        priority: string,
        status: string,
        type: string,
        assignee: string,
        date_created: Date
    }

    const { method, project, ticket } = props;
    const {data:projectOptions, loading:optionsLoading } = useFetchData("http://localhost:3001/projects/all-project-names");
    const {data:ticketEnums, loading:enumsLoading} = useFetchData("http://localhost:3001/tickets/ticket-enums");
    const {data:developers} = useFetchData("http://localhost:3001/users/developers-by-name");
    const {submitForm} = useFormSubmit();

    const { user } = useAuthContext();

    const [form, setForm ] = useState<FormObj>({
        title:"",
        description:"",
        project:project ? project._id : "",
        author:user ? user.user._id : "",
        priority: "",
        status:"",
        type:"",
        assignee:"",
        date_created: new Date(Date.now())
    });

    useEffect(()=>{
        if(props.ticket) setForm(ticket);
    },[]);

    useEffect(()=>{
        //for when someone is assigned to the project...change form to
        if(form.assignee && !form.status) setForm({...form, status: ticketEnums.statuses[1]});
        //reverse assigned status to not assigned if developer removed
        if(!form.assignee && form.status) setForm({...form, status: ''});
    },[form])

    const handleFormChange = (e:any, formProperty:any)=>{
        setForm({...form, [formProperty]: e.target.value});
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        const endpoint = method === "PATCH" ? `${ticket._id}/update` : 'create';
        submitForm(form, `http://localhost:3001/projects/${project._id}/tickets/${endpoint}`, method);
    }
    
    return (
        !optionsLoading && !enumsLoading && <form method={method} onSubmit={handleSubmit}>
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
                    forValue={"ticket-assignee"}
                    options={developers}
                    optionsKey={"username"}
                    selected = {form.assignee}
                    setter={(e:Event)=> handleFormChange(e, "assignee")}
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
            
            <button>{props.ticket ? "Update" : "Add"}</button>
        </form>
    )
}

export default TicketForm;