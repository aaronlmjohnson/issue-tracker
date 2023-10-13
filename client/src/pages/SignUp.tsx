import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const displaySignup = ()=>{
    return (
        <>
            <h1 className ="signup-form-header">
                Sign up
            </h1>
            <SignUpForm />
            <div className="auth-links">
                <p className="">Have an Account? <a href="/login">Sign In</a></p>
                <p className=""><a href="/guest-login">Continue as Guest</a></p>
            </div>
        </>
    );
}

const displayLogin = ()=>{
    return (
        <>
            <h1 className ="signup-form-header ">
                Log in
            </h1>
            <LoginForm />
            <div className="auth-links">
                <p className="">Have an Account? <a href="/sign-up">Sign up</a></p>
                <p className=""><a href="/guest-login">Continue as Guest</a></p>
            </div>
        </>
    );
}

const SignUp = (props: any)=>{
    return (
        <div className="sign-up-form-container">
            <div className="signup-form-container">
                {props.page === "signup" && displaySignup()} 
                {props.page === "login" && displayLogin()}
            </div>
        </div>
    );
}

export default SignUp;

