import useFormHandler from "../hooks/useFormHandler";
import { useLogin } from "../hooks/useLogin";

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
        <form  method="POST"  onSubmit={handleSubmit}>
            {
                ["Administrator", "Project Lead", "Developer"].map((roleName:string)=>{
                    return (
                    <button onClick={(e:any)=> handleChange(e, "role")} value={roleName} key={crypto.randomUUID()}>
                        {roleName}
                    </button>);
                })
            }
            <button>Submit</button>
        </form>
    );
}

export default GuestLoginForm;