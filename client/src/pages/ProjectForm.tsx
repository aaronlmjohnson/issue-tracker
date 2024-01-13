import { useState, useEffect } from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import { useFormSubmit } from "../hooks/useFormSubmit";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import ComboBox from "../components/ComboBox";
import Checkboxes from "../components/Checkboxes";
import useFormHandler from "../hooks/useFormHandler";
import CancelButton from "../components/CancelButton";
import FormError from "../components/FormError";
import { useActiveFormContext } from "../hooks/useActiveFormContext";
import FormElement from "../components/FormElement";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectForm = (props:any)=>{
    const {developers, leads, loading} = useUserInfo();
    const { submitForm, error} = useFormSubmit();
    const [developerNames, setDeveloperNames] = useState<string[]>([]);
    const {activeForm, updateTarget} = useActiveFormContext();
    const {user} = useAuthContext();

    const {handleChange, form, setForm} = useFormHandler({
        title: "",
        description:"",
        project_lead: "",
        developers_assigned_to: [],
        author: user.user._id
    });

    useEffect(()=>{
        if(activeForm === "update-project"){
            if(updateTarget){
                if("developers_assigned_to" in updateTarget){
                    setDeveloperNames(updateTarget.developers_assigned_to.map((dev:any)=>dev._id));
                    setForm({...updateTarget, developers_assigned_to:updateTarget.developers_assigned_to.map((dev:any)=> dev._id)})
                }
            }
        }
    }, [updateTarget]);

    const handleSubmit = (e:any)=> {
        e.preventDefault();
        console.log(updateTarget);
        if(updateTarget === null) submitForm(form, "/projects/create"); // need to adjust this
        else submitForm(form, `/projects/${updateTarget._id}/update`, "PATCH");  
    }

    const inputs = [
        <TextInput 
            forValue={"title"}
            label={"Title"}
            placeholder={"Enter a title"}
            value={form.title}
            setter={(e: any )=> {handleChange(e, "title");}}
        />,
        <TextArea 
            forValue={"description"}
            label={"Description"}
            placeholder={"Describe the project"}
            rows={10}
            cols={30}
            value={form.description}
            setter={(e: any )=> {handleChange(e, "description")}}
        />,
        <ComboBox 
            forValue={"project-lead"}
            options={leads}
            optionsKey={"fullName"}
            selected = {form.project_lead}
            label={"Project Lead"}
            placeholder={"Select the Project Lead"}
            setter={(e: any )=> {handleChange(e, "project_lead")}}                
        />,
        <Checkboxes
            forValue= {"developers"}
            legend={"Select Developers for the project:"}
            checkboxes={developers}
            labelKey={"fullName"}
            setter={setForm}
            form={form}
            checkBoxOptions = {developerNames}
            selectedOptions = {form.developers_assigned_to}
            checkboxProperty = {"developers_assigned_to"}
        />,
        <div className="flex gap-x-2">
            <button className="px-4 py-1 border-2 border-primary rounded-lg font-secondary font-bold text-base text-primary">Submit</button>
            <CancelButton />
        </div>
        


    ]   

    return(
        !loading  && 
        <>
            <FormElement 
                formObj = {form}
                title={props.title}
                method={"POST"}
                inputs = {inputs}
                handleSubmit = {handleSubmit}
                formStyle={"small"}
            /> 
            {error && <FormError error= {error}/>}
        </>
    )
}

export default ProjectForm;