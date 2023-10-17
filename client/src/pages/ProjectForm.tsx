import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { useState, useEffect } from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import { useFormSubmit } from "../hooks/useFormSubmit";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import ComboBox from "../components/ComboBox";
import Checkboxes from "../components/Checkboxes";

const ProjectForm = (props:any)=>{
    const {developers, leads, loading} = useUserInfo();
    const { submitForm } = useFormSubmit();
    
    interface FormObj {
    title: string,
    description: string,
    project_lead: string,
    developers_assigned_to: string[]
}
    const [form, setForm] = useState<FormObj>({
        title: "",
        description:"",
        project_lead: "",
        developers_assigned_to: []
    });

    useEffect(()=>{
        if(props.project){
            setForm((prevState) =>{
                return {
                    title: props.project.title,
                    description: props.project.description,
                    project_lead: props.project.project_lead,
                    developers_assigned_to: props.project.developers_assigned_to
            }});
        }
    }, []);

    const handleSubmit = (e:any)=> {
        e.preventDefault();
        if(props.toggleUpdate)
            submitForm(form, `http://localhost:3001/projects/${props.project._id}/update`, "PATCH");
        else submitForm(form, "http://localhost:3001/projects/create");
    }

    return(
        !loading  && <div className="create-project-form">
            <h1>{props.title}</h1>
            <form action="" method="POST" className="signup-form text-base font-normal " onSubmit={handleSubmit}>
                <TextInput 
                    forValue={"title"}
                    label={"Title:"}
                    value={form.title}
                    setter={(e: any )=> {setForm({...form, title: e.target.value});}}
                />
                <TextArea 
                    forValue={"description"}
                    label={"Description:"}
                    rows={10}
                    cols={30}
                    value={form.description}
                    setter={(e: any )=> {setForm({...form, description: e.target.value});}}
                />
                 <ComboBox 
                    forValue={"project-lead"}
                    options={leads}
                    optionsKey={"username"}
                    selected = {form.project_lead}
                    setter={(e: any )=> {setForm({...form, project_lead: e.target.value});}}
                />

                <Checkboxes
                    forValue= {"developers"}
                    legend={"Select Developers for the project:"}
                    checkboxes={developers}
                    labelKey={"username"}
                    setter={setForm}
                    form={form}
                    checkBoxOptions = {props.project.developers_assigned_to}
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
                
                {/* {error && <FormError error= {error}/>} */}
            </form>
        </div>
    )
}

export default ProjectForm;