import { useSignup } from "../hooks/useSignup";
import FormError from "./FormError";
import useFormHandler from "../hooks/useFormHandler";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import ComboBox from "./ComboBox";
import { useFetchData } from "../hooks/useFetchData";

const SignUpForm = ()=>{

    const {handleChange, form } = useFormHandler({
        email:"",
        first_name: "",
        last_name:"",
        password:"",
        role:"",
    })

    const {signup, error} = useSignup();
    const {data:roles, loading:rolesLoading} = useFetchData("http://localhost:3001/users/roles");

    const handleSubmit =  (e:any)=>{
        e.preventDefault();
        signup(form);
    }

    return (  
            !rolesLoading && <form action="" method="POST" className="signup-form text-base font-normal " onSubmit={handleSubmit}>
                <TextInput 
                    forValue={"email"}
                    classValue={"email-input"}
                    label={"Email:"}
                    setter = {(e:any)=> handleChange(e, "email")}
                />
                <TextInput 
                    forValue={"first-name"}
                    classValue={"first-name-input"}
                    label={"First Name:"}
                    setter = {(e:any)=> handleChange(e, "first_name")}
                />
                <TextInput 
                    forValue={"last-name"}
                    classValue={"last-name-input"}
                    label={"Last Name:"}
                    setter = {(e:any)=> handleChange(e, "last_name")}
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
                    label={"Password:"}
                    setter = {(e:any)=> handleChange(e, "password")}
                />
                <button>Sign up</button>
                {error && <FormError error= {error}/>}
            </form>
    );
}

export default SignUpForm;