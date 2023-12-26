import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import AuthLinks from "../components/AuthLinks";
import FormLogo from "../components/FormLogo";
import { useFetchData } from "../hooks/useFetchData";
import ContentLoading from "./ContentLoading";

const displaySignup = (loading:any, roles:any)=>{

    return (
        <>
            <SignUpForm 
                loading={loading}
                roles={roles}
            />
            <AuthLinks 
                firstLink={"/login"}
                secondLink={"/guest-login"}
                firstContent={["Have an account? ", "Sign In"]}
                secondContent={["Continue as ", "Guest"]}
            />
        </>
    );
}

const displayLogin = ()=>{
    return (
        <>
            <LoginForm />
            <AuthLinks 
                firstLink={"/sign-up"}
                secondLink={"/guest-login"}
                firstContent={["Don't have an account? ", "Sign Up"]}
                secondContent={["Continue as ", "Guest"]}
            />
        </>
    );
}

const SignUp = (props: any)=>{
    const {data:roles, loading:rolesLoading} = useFetchData("/users/roles", true);
    
    return (
        rolesLoading ? 
        <ContentLoading backgroundColor="bg-primary"/>:
        <div className="bg-primary bg-opacity-[100] flex h-screen">
            <div className="m-auto bg-white h-fit max-w-lg min-w-fit w-1/2 py-8 px-12 ">
                <FormLogo />
                {props.page === "signup" && displaySignup(rolesLoading, roles)} 
                {props.page === "login" && displayLogin()}
            </div>
        </div>
    );
}

export default SignUp;

