import FormInput from "./FormInput";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
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
        console.log(`Welcome to Issue Tracker ${username}.`);
    }

    return (
        <form action="" method="POST" className="sign-up-form text-base font-normal" onSubmit={handleSubmit}>
            <h1>{error ? error : ""}</h1>
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
                options = {roleOptions}
            />
            <FormInput 
                forValue={"submit"}
                classValue={"submit-button"}
                nameValue={"submit"}
                type={"submit"}
                content={""}
                styling = {"border px-5 py-1"}
            />
            
        </form>
    );
}

export default SignUpForm;

//forValue:string, classValue:string, nameValue:string, type:string, content:string

