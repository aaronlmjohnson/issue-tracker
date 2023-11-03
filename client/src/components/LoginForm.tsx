import FormInput from "./FormInput";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import FormError from "./FormError";
import useFormHandler from "../hooks/useFormHandler";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

const LoginForm = ()=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {form, handleChange} = useFormHandler({
        email:'',
        password:'',
    });

    const {login, isLoading, error} = useLogin();

    const handleSubmit =  async (e:any)=>{
        e.preventDefault();
        await login(form);
    }

    return (
        <form action="" method="POST" className="sign-up-form text-base font-normal" onSubmit={handleSubmit}>
            <TextInput 
                forValue={"email"}
                classValue={"email-input"}
                label={"Email:"}
                value={form.email}
                setter={(e:any) => handleChange(e, 'email')}
            />
            <PasswordInput 
                forValue={"password"}
                classValue={"password-input"}
                value={form.password}
                label={"Password:"}
                setter={(e:any) => handleChange(e, 'password')}
            />
            <button>Submit</button>
            {error && <FormError error= {error}/>}


        </form>
    );
}

export default LoginForm;

//forValue:string, classValue:string, nameValue:string, type:string, content:string

