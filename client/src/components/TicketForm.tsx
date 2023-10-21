import { ReactEventHandler, useEffect, useState } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import ComboBox from "./ComboBox";
import { useFetchData } from "../hooks/useFetchData";

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

    const { method, project, author } = props;
    const {data:projectOptions, loading:optionsLoading } = useFetchData("http://localhost:3001/projects/all-project-names");
    const [form, setForm ] = useState<FormObj>({
        title:"",
        description:"",
        project:project ? project._id : null,
        author:author ? author._id : null,
        priority: "",
        status:"",
        type:"",
        assignee:[]
    });

    useEffect(()=>{
        console.log(form)
    }, [form])

    const handleFormChange = (e:any, formProperty:any)=>{
        setForm({...form, [formProperty]: e.target.value});
    }
    
    return (
        !optionsLoading && <form method={method} >
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
                    setter={(e: any )=> {setForm({...form, project: e.target.value});}}
                    disabled = {true}
            />
        </form>
    )
}

export default TicketForm;