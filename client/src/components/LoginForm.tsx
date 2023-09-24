import FormInput from "./FormInput";
import { useState } from "react";

const LoginForm = ()=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit =  async (e:any)=>{
        e.preventDefault();
        
        const formContent =  { username, password, role: "Developer" }
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formContent),
        });
        console.log(response)

        //const json = await response.json();


        if(!response.ok){
            console.log('error')
            // setError(json.error);
        } 
        if(response.ok){
            console.log(`User ${username} has logged in.`)
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

export default LoginForm;

//forValue:string, classValue:string, nameValue:string, type:string, content:string

