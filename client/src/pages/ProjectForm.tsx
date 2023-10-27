import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { useState, useEffect } from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import { useFormSubmit } from "../hooks/useFormSubmit";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import ComboBox from "../components/ComboBox";
import Checkboxes from "../components/Checkboxes";
import useFormHandler from "../hooks/useFormHandler";

const ProjectForm = (props:any)=>{
    const {developers, leads, loading} = useUserInfo();
    const { submitForm } = useFormSubmit();
    const [developerNames, setDeveloperNames] = useState([]);
    const {handleChange, form, setForm} = useFormHandler({
        title: "",
        description:"",
        project_lead: "",
        developers_assigned_to: []
    });

    interface FormObj {
    title: string,
    description: string,
    project_lead: string,
    developers_assigned_to: string[]
}
    useEffect(()=>{
        console.log(developers);
        if(props.project){
            setForm(props.project);
            setDeveloperNames(props.project.developers_assigned_to);
        }
    }, []);

    const handleSubmit = (e:any)=> {
        e.preventDefault();
        if(props.project === null) submitForm(form, "http://localhost:3001/projects/create");
        else submitForm(form, `http://localhost:3001/projects/${props.project._id}/update`, "PATCH");
         
    }

    const handleCancel = ()=>{
        props.setFormActive(false);
    }

    return(
        !loading  && <div className="create-project-form">
            <h1>{props.title}</h1>
            <form action="" method="POST" className="signup-form text-base font-normal " onSubmit={handleSubmit}>
                <TextInput 
                    forValue={"title"}
                    label={"Title:"}
                    value={form.title}
                    setter={(e: any )=> {handleChange(e, "title");}}
                />
                <TextArea 
                    forValue={"description"}
                    label={"Description:"}
                    rows={10}
                    cols={30}
                    value={form.description}
                    setter={(e: any )=> {handleChange(e, "description")}}
                />
                 <ComboBox 
                    forValue={"project-lead"}
                    options={leads}
                    optionsKey={"first_name"}
                    selected = {form.project_lead}
                    setter={(e: any )=> {handleChange(e, "project_lead")}}                
                />

                <Checkboxes
                    forValue= {"developers"}
                    legend={"Select Developers for the project:"}
                    checkboxes={developers}
                    labelKey={"first_name"}
                    setter={setForm}
                    form={form}
                    checkBoxOptions = {developerNames}
                    selectedOptions = {form.developers_assigned_to}
                    checkboxProperty = {"developers_assigned_to"}
                />

                <FormInput 
                    forValue={"submit"}
                    classValue={"submit-button"}
                    nameValue={"submit"}
                    type={"submit"}
                    content={""}
                    styling = {"border px-5 py-1 text-black rounded-md"}
                    labelStyle = {"text-black"}
                />
                <button onClick={handleCancel}>Cancel</button>
                
                {/* {error && <FormError error= {error}/>} */}
            </form>
        </div>
    )
}

export default ProjectForm;