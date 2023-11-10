import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import AuthLinks from "../components/AuthLinks";
import FormLogo from "../components/FormLogo";


const displaySignup = ()=>{
    return (
        <>
            <SignUpForm />
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
    return (
        <div className="bg-primary bg-opacity-[100] flex h-screen">
            <div className="m-auto bg-white h-fit max-w-lg min-w-fit w-1/2 py-8 px-12 ">
                <FormLogo />
                {props.page === "signup" && displaySignup()} 
                {props.page === "login" && displayLogin()}
            </div>
        </div>
    );
}

export default SignUp;

