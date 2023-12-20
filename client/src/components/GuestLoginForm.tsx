import useFormHandler from "../hooks/useFormHandler";
import { useLogin } from "../hooks/useLogin";
import GuestRoleButton from "./GuestRoleButton";
import SubmitButton from "./SubmitButton";
import { v4 as uuid } from 'uuid';


const GuestLoginForm = ()=>{
    const {form, handleChange} = useFormHandler({
        role:""
    });
    const {login} = useLogin();

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        login(form, "http://localhost:3001/users/guest-login");
    }

    return (
        <form  method="POST" className="flex flex-col gap-y-4 justify-center w-auto mb-8 mt-4" onSubmit={handleSubmit}>
            {
                ["Administrator", "Project Lead", "Developer"].map((roleName:string)=>{
                    return (
                        <GuestRoleButton 
                            setter={(e:any)=> handleChange(e, "role")}
                            key={uuid()}
                            roleName={roleName}
                        />
                    )
                })
            }
            <SubmitButton submitStyle={"submit-one"} content={"Login"}/>
        </form>
    );
}

export default GuestLoginForm;