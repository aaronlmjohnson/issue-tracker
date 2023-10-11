import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { useState, useEffect } from "react";
import { useUserInfo } from "../hooks/useUserInfo";

const CreateProjectForm = ()=>{
    const handleSubmit = (e:any)=> console.log(e)
    const {developers, leads, loading} = useUserInfo();

    interface FormObj {
    title: string,
    description: string,
    projectLead: string,
    developers: string[]
}
    const [form, setForm] = useState<FormObj>({
        title: "",
        description:"",
        projectLead: "",
        developers: []
    });

    const [checkState, setCheckState] = useState<string[]>([]);
    
    useEffect(()=>{
        
        console.log(form);

    }, [form])

    const handleCheckbox = (e:any, i:number)=>{
        if(!form.developers.includes(e.target.value)){
            setCheckState((prevState:string[])=>{
                const newState = [...prevState, e.target.value];
                setForm({...form, developers:newState})
                return newState;
            });
        } else{
            setCheckState((prevState:string[])=>{
                const newState = prevState.filter((value)=> value !== e.target.value);
                setForm({...form, developers:newState})
                return newState
            })
        }
            
        
        
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
                    setter={(e: any )=> {setForm({...form, projectLead: e.target.value});}}
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