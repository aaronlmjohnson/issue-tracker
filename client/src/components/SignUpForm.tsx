import FormInput from "./FormInput";
import { useState } from "react";

const SignUpForm = ()=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit =  async (e:any)=>{
        e.preventDefault();
        
        const formContent = {username, password}

        const response = await fetch('http://localhost:3001/sign-up', {
            method: "POST",
            body: JSON.stringify(formContent),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok) setError(json.error);
        if(response.ok){
            console.log(`Welcome to Issue Tracker ${username}.`)
            setError(null);
            setUsername('');
            setPassword('');
        }
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
                onChange={(e:any) => setPassword(e.target.value)}
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

