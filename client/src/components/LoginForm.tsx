import FormInput from "./FormInput";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import FormError from "./FormError";

const LoginForm = ()=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, isLoading, error} = useLogin();

    const handleSubmit =  async (e:any)=>{
        e.preventDefault();
        console.log(username);
        await login(username, password);
    }

    return (
        <form action="" method="POST" className="sign-up-form text-base font-normal" onSubmit={handleSubmit}>
            <FormInput 
                forValue={"username"}
                classValue={"username-input"}
                nameValue={"username"}
                type={"text"}
                content={"Username:"}
                setter = {setUsername}
                onChange={(e:any) => setUsername(e.target.value)}
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
            {error && <FormError error= {error}/>}


        </form>
    );
}

export default LoginForm;

//forValue:string, classValue:string, nameValue:string, type:string, content:string

