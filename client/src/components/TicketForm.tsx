import { useEffect, useState } from "react";
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

const TicketForm = (props:any)=>{
    const { title } = props;
    const {activeForm:ticket, updateTarget} = useActiveFormContext();
    const { user } = useAuthContext();

    const {data:projectOptions, loading:optionsLoading } = useFetchData("/projects/all-project-names");// this returns nothing fix route 
    const {data:ticketEnums, loading:enumsLoading} = useFetchData("/tickets/ticket-enums");
    const {data:developers} = useFetchData("/users/developers-by-name");
    // const {submitForm} = useFormSubmit();

    // //if ticket isn't null then I can instantiate with ticket
    const {form, setForm, handleChange} = useFormHandler({
        title:"",
        description:"",
        project:"",
        author:user.user._id,
        priority: "",
        status:"",
        type:"",
        assignee:"",
        date_created: new Date(Date.now())
    });

    // useEffect(()=>{
    //     if(props.ticket) setForm(ticket);
    // },[]);

    // useEffect(()=>{
    //     //for when someone is assigned to the project...change form to
    //     if(form.assignee && !form.status) setForm({...form, status: ticketEnums.statuses[1]});
    //     //reverse assigned status to not assigned if developer removed
    // },[form])


    const handleSubmit = (e:any)=>{
        e.preventDefault();
        // const endpoint = method === "PATCH" ? `${ticket._id}/update` : 'create';
        // submitForm(form, `http://localhost:3001/projects/${project._id}/tickets/${endpoint}`, method);
    }

    const inputs = [
        <TextInput 
                forValue={"ticket-title"}
                label={"Title:"}
                value={form.title}
                setter={(e:Event)=> handleChange(e, "title")}
            />,
            <TextArea 
                forValue={"ticket-description"}
                label={"Description: "}
                value={form.description}
                setter={(e:Event)=> handleChange(e, "description")}
            />,
            <ComboBox 
                    forValue={"ticket-project-name"}
                    options={projectOptions}
                    optionsKey={"title"}
                    selected = {form.project}
                    setter={(e:Event)=> handleChange(e, "project")}
                    disabled = {true}
            />,
            <ComboBox 
                    forValue={"ticket-priority"}
                    options={ticketEnums.priorities}
                    selected = {form.priority}
                    setter={(e:Event)=> handleChange(e, "priority")}
                    disabled = {false}
            />,
            <ComboBox 
                    forValue={"ticket-assignee"}
                    options={developers}
                    optionsKey={"fullName"}
                    selected = {form.assignee}
                    setter={(e:Event)=> handleChange(e, "assignee")}
                    disabled = {false}
            />,
            <ComboBox 
                    forValue={"ticket-status"}
                    options={ticketEnums.statuses}
                    selected = {form.status}
                    setter={(e:Event)=> handleChange(e, "status")}
                    disabled = {false}
            />,
            <ComboBox 
                    forValue={"ticket-type"}
                    options={ticketEnums.types}
                    selected = {form.type}
                    setter={(e:Event)=> handleChange(e, "type")}
                    disabled = {false}
            />,
            <button>{props.ticket ? "Update" : "Add"}</button>,
            <CancelButton />
    ]
    
    return (
        <FormElement 
            formObj={form}
            title={"Add Ticket"}
            method={"POST"}
            inputs={inputs}
            handleSubmit={handleSubmit}
        />
    )
}

export default TicketForm;