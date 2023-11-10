import { useSignup } from "../hooks/useSignup";
import FormError from "./FormError";
import useFormHandler from "../hooks/useFormHandler";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import ComboBox from "./ComboBox";
import { useFetchData } from "../hooks/useFetchData";
import SubmitButton from "./SubmitButton";

const SignUpForm = ()=>{

    const {handleChange, form } = useFormHandler({
        email:"",
        first_name: "",
        last_name:"",
        password:"",
        role:"",
    })

    const {signup, error} = useSignup();
    const {data:roles, loading:rolesLoading} = useFetchData("http://localhost:3001/users/roles", true);

    const handleSubmit =  (e:any)=>{
        e.preventDefault();
        signup(form);
    }

    return (  
            !rolesLoading && <form action="" method="POST" className="flex flex-col gap-y-4 justify-center w-auto my-8" onSubmit={handleSubmit}>
                 <TextInput 
                    forValue={"first-name"}
                    classValue={"first-name-input"}
                    label={"First Name"}
                    placeholder={"Enter first name"}
                    setter = {(e:any)=> handleChange(e, "first_name")}
                />
                <TextInput 
                    forValue={"last-name"}
                    classValue={"last-name-input"}
                    label={"Last Name"}
                    placeholder={"Enter last name"}
                    setter = {(e:any)=> handleChange(e, "last_name")}
                />
                <TextInput 
                    forValue={"email"}
                    classValue={"email-input"}
                    label={"Email"}
                    placeholder={"Enter email"}
                    setter = {(e:any)=> handleChange(e, "email")}
                />
                <ComboBox 
                    forValue={"roles"}
                    options={roles}
                    selected = {form.role}
                    setter={(e:Event)=> handleChange(e, "role")}
            />
                <PasswordInput 
                    forValue={"password"}
                    classValue={"password-input"}
                    label={"Password"}
                    placeholder={"Enter password"}
                    setter = {(e:any)=> handleChange(e, "password")}
                />
                <SubmitButton content={"Sign Up"}/>
                {error && <FormError error= {error}/>}
            </form>
    );
}

export default SignUpForm;