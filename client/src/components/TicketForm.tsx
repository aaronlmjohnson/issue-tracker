import { useEffect } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ComboBox from "./ComboBox";
import { useFetchData } from "../hooks/useFetchData";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFormSubmit } from "../hooks/useFormSubmit";
import useFormHandler from "../hooks/useFormHandler";
import FormElement from "./FormElement";
import CancelButton from "./CancelButton";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import { useParams } from "react-router-dom";

const TicketForm = (props:any)=>{
    const { title } = props;
    const {activeForm, updateTarget:ticket} = useActiveFormContext();
    const { user } = useAuthContext();
    const {projectId} = useParams();

    const {data:ticketEnums, loading:enumsLoading} = useFetchData("/tickets/ticket-enums");
    const {data:developers} = useFetchData("/users/developers-by-name");
    const {data:project, loading:projectLoading} = useFetchData(`/projects/${projectId}`);
    const {submitForm} = useFormSubmit();

    const {form, setForm, handleChange} = useFormHandler({
        title:"",
        description:"",
        project:projectId,
        author:user.user._id,
        priority: "",
        status:"",
        ticketType:"",
        assignee:"",
        date_created: new Date(Date.now())
    });

    useEffect(()=>{
        if(form.assignee && !form.status) 
            setForm({...form, status: ticketEnums.statuses[1]});
    },[ticket, form, projectLoading, project]);


    const handleSubmit = (e:any)=>{
        e.preventDefault();
        submitForm(form, `/projects/${project._id}/tickets/create`, "POST");
    }

    const inputs = [
        <TextInput 
                forValue={"ticket-title"}
                label={"Title:"}
                value={form.title}
                setter={(e:Event)=> handleChange(e, "title")}
            />,
            <ComboBox 
                    forValue={"ticket-project-name"}
                    options={[project]}
                    label={"Project Name"}
                    optionsKey={"title"}
                    selected = {form.project}
                    setter={(e:Event)=> handleChange(e, "project")}
                    disabled = {true}
            />,
            <TextArea 
                forValue={"ticket-description"}
                label={"Description"}
                value={form.description}
                setter={(e:Event)=> handleChange(e, "description")}
            />,
            <ComboBox 
                    forValue={"ticket-priority"}
                    label={"Priority"}
                    options={ticketEnums.priorities}
                    selected = {form.priority}
                    setter={(e:Event)=> handleChange(e, "priority")}
                    disabled = {false}
            />,
            <ComboBox 
                    forValue={"ticket-assignee"}
                    options={developers}
                    label={"Assignee"}
                    optionsKey={"fullName"}
                    selected = {form.assignee}
                    setter={(e:Event)=> handleChange(e, "assignee")}
                    disabled = {false}
            />,
            <ComboBox 
                    forValue={"ticket-type"}
                    label={"Type"}
                    options={ticketEnums.types}
                    selected = {form.ticketType}
                    setter={(e:Event)=> handleChange(e, "ticketType")}
                    disabled = {false}
            />,
            <ComboBox 
                    forValue={"ticket-status"}
                    label={"Status"}
                    options={ticketEnums.statuses}
                    selected = {form.status}
                    setter={(e:Event)=> handleChange(e, "status")}
                    disabled = {false}
            />,
            <button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary">Add</button>
            ,
            <CancelButton />
    ]
    
    return (
        <FormElement 
            formObj={form}
            title={"Add Ticket"}
            method={"POST"}
            inputs={inputs}
            handleSubmit={handleSubmit}
            formStyle={"large"}
        />
    )
}

export default TicketForm;