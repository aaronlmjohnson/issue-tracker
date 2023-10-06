import FormInput from "../components/FormInput";
import FormError from "../components/FormError";
import { useFetchData } from "../hooks/useFetchData";
import { useEffect } from "react";

const CreateProjectForm = ()=>{
    const handleSubmit = (e:any)=> console.log(e)
    const leadOptions = [{value: "Aaron", content: "Aaron"}];
    const {data, loading, apiCall} = useFetchData();

    useEffect(()=>{
        apiCall("http://localhost:3001/users/developers");
    }, [])
    return(
        !loading && <div className="create-project-form">
            <form action="" method="POST" className="signup-form text-base font-normal " onSubmit={handleSubmit}>
                <FormInput 
                    forValue={"title"}
                    classValue={"title-input"}
                    nameValue={"title"}
                    type={"text"}
                    content={"Title:"}
                    labelStyle = {"text-black"}
                />
                <FormInput 
                    forValue={"description"}
                    classValue={"description"}
                    nameValue={"description"}
                    type={"textarea"}
                    content={"Description:"}
                    labelStyle = {"text-black"}
                    rows={10}
                    cols={30}
                />
                 <FormInput 
                    forValue={"project-lead"}
                    classValue={"project-lead-input"}
                    nameValue={"project-lead"}
                    type={"select"}
                    content={"Select lead for project:"}
                    labelStyle = {"text-black"}
                    options={leadOptions}
                />
                <FormInput 
                    forValue={"developers"}
                    classValue={"developers-input"}
                    nameValue={"developers"}
                    type={"checkbox"}
                    legend={"Select developers for the project:"}
                    labelStyle = {"text-black"}
                    checkboxes={data}
                    labelKey={"username"}
                />
                {/* <FormInput 
                    forValue={"select"}
                    classValue={""}
                    nameValue={"select"}
                    type={"select"}
                    content={"Role:"}
                /> */}
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