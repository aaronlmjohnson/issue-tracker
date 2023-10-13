import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { useState, useEffect } from "react";
import { useUserInfo } from "../hooks/useUserInfo";
import { useFormSubmit } from "../hooks/useFormSubmit";

const CreateProjectForm = ()=>{
    
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
        console.log(form)
    }, [form])

    const [checkState, setCheckState] = useState<string[]>([]);

    const handleCheckbox = (e:any, i:number)=>{
        if(!form.developers_assigned_to.includes(e.target.value)){
            setCheckState((prevState:string[])=>{
                const newState = [...prevState, e.target.value];
                setForm({...form, developers_assigned_to:newState})
                return newState;
            });
        } else{
            setCheckState((prevState:string[])=>{
                const newState = prevState.filter((value)=> value !== e.target.value);
                setForm({...form, developers_assigned_to:newState})
                return newState
            })
        }
    }

    const handleSubmit = (e:any)=> {
        e.preventDefault();
        submitForm(form, "http://localhost:3001/projects/create");
    }

    return(
        !loading  && <div className="create-project-form">
            <form action="" method="POST" className="signup-form text-base font-normal " onSubmit={handleSubmit}>
                <FormInput 
                    forValue={"title"}
                    classValue={"title-input"}
                    nameValue={"title"}
                    type={"text"}
                    content={"Title:"}
                    styling={"border"}
                    labelStyle = {"text-black"}
                    setter={(e: any )=> {setForm({...form, title: e.target.value});}}
                />
                <FormInput 
                    forValue={"description"}
                    classValue={"description"}
                    nameValue={"description"}
                    type={"textarea"}
                    content={"Description:"}
                    labelStyle = {"text-black"}
                    styling={"border"}
                    rows={10}
                    cols={30}
                    setter={(e: any )=> {setForm({...form, description: e.target.value});}}
                />
                 <FormInput 
                    forValue={"project-lead"}
                    classValue={"project-lead-input"}
                    nameValue={"project-lead"}
                    type={"select"}
                    content={"Select lead for project:"}
                    labelStyle = {"text-black"}
                    styling={"border"}
                    options={leads}
                    optionsKey={"username"}
                    setter={(e: any )=> {setForm({...form, project_lead: e.target.value});}}
                />
                <FormInput 
                    forValue={"developers"}
                    classValue={"developers-input"}
                    nameValue={"developers"}
                    type={"checkbox"}
                    legend={"Select developers for the project:"}
                    labelStyle = {"text-black"}
                    styling={"border"}
                    checkboxes={developers}
                    labelKey={"username"}
                    setter={handleCheckbox}
                    checkState={checkState}

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

export default CreateProjectForm;