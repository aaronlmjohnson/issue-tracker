import useFormHandler from "../hooks/useFormHandler";
import { useFormSubmit } from "../hooks/useFormSubmit";

const GuestLoginForm = ()=>{
    const {form, handleChange} = useFormHandler({
        role:""
    });
    const {submitForm} = useFormSubmit();

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        submitForm(form, "http://localhost:3001/users/guest-login", "POST");
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