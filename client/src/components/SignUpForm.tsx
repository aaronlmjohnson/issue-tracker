import FormInput from "./FormInput";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import FormError from "./FormError";
const SignUpForm = ()=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Developer');
    const roleOptions = [{value: "Admin", content: "Admin"}, {value: "Project Lead", content: "Project Lead"}, {value: "Developer", content: "Developer"}];
    //const [error, setError] = useState(null);
    const {signup, isLoading, error} = useSignup();

    const handleSubmit =  async (e:any)=>{
        e.preventDefault();
        await signup(username, password, role);
    }

    return (
        <div className="signup-form-container w-1/3 h-screen bg-primary px-12 py-48">
            <h1 className ="signup-form-header font-primary text-white xl:text-6xl lg:text-5xl">Sign Up</h1>
            <form action="" method="POST" className="signup-form text-base font-normal " onSubmit={handleSubmit}>
                <FormInput 
                    forValue={"username"}
                    classValue={"username-input"}
                    nameValue={"username"}
                    type={"text"}
                    content={"Username:"}
                    setter = {setUsername}
                />
                <FormInput 
                    forValue={"password"}
                    classValue={"password-input"}
                    nameValue={"password"}
                    type={"password"}
                    content={"Password:"}
                    setter = {setPassword}
                />
                <FormInput 
                    forValue={"select"}
                    classValue={""}
                    nameValue={"select"}
                    type={"select"}
                    setter = {setRole}
                    content={"Role:"}
                    options = {roleOptions}
                />
                <FormInput 
                    forValue={"submit"}
                    classValue={"submit-button"}
                    nameValue={"submit"}
                    type={"submit"}
                    content={""}
                    styling = {"border px-5 py-1 text-white rounded-md"}
                />
                {error && <FormError error= {error}/>}
            </form>
        </div>
        
    );
}

export default SignUpForm;

//forValue:string, classValue:string, nameValue:string, type:string, content:string

