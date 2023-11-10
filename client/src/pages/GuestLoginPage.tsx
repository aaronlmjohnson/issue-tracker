import FormLogo from "../components/FormLogo";
import GuestLoginForm from "../components/GuestLoginForm";
import AuthLinks from "../components/AuthLinks";

const GuestLoginPage = ()=>{
    return (
    <div className="bg-primary bg-opacity-[100] flex h-screen">
        <div className="m-auto bg-white h-fit max-w-lg min-w-fit w-1/2 py-8 px-12 ">
            <FormLogo />
            <h1 >Select a Role</h1>
            <GuestLoginForm />
            <AuthLinks 
                firstLink={"/sign-up"}
                secondLink={"/login"}
                firstContent={["Don't have an account? ", "Sign Up"]}
                secondContent={["Have an account? ", "Login"]}
            />
        </div>
    </div>);
}

export default GuestLoginPage;