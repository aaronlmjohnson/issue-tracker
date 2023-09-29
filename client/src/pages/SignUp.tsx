import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const displaySignup = ()=>{
    return (
        <>
            <h1 className ="signup-form-header font-primary text-white xl:text-6xl lg:text-5xl">
                Sign up
            </h1>
            <SignUpForm />
            <div className="auth-links mt-12">
                <p className="text-white font-secondary text-xs">Have an Account? <a href="/login">Sign In</a></p>
                <p className="text-white font-secondary text-xs mt-3"><a href="/guest-login">Continue as Guest</a></p>
            </div>
        </>
    );
}

const displayLogin = ()=>{
    return (
        <>
            <h1 className ="signup-form-header font-primary text-white xl:text-6xl lg:text-5xl">
                Log in
            </h1>
            <LoginForm />
            <div className="auth-links mt-12">
                <p className="text-white font-secondary text-xs">Have an Account? <a href="/sign-up">Sign up</a></p>
                <p className="text-white font-secondary text-xs mt-3"><a href="/guest-login">Continue as Guest</a></p>
            </div>
        </>
    );
}

const SignUp = (props: any)=>{
    console.log(props.page);
    return (
        <div className="sign-up-form-container h-screen w-screen ">
            <div className="signup-form-container w-1/4 h-screen bg-primary px-12 py-48">
                {props.page === "signup" && displaySignup()} ||
                {props.page === "login" && displayLogin()}
            </div>
        </div>
    );
}

export default SignUp;

