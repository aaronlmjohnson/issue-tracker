import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const Logo = <FontAwesomeIcon icon={faBug} className="rotate-45"/>

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
        <div className="bg-primary bg-opacity-20 h-screen flex justify-center content-center">
            {Logo}
            <div className="border border-black h-fit py-8 px-12">
                <h1>Tracker</h1>
                {props.page === "signup" && displaySignup()} 
                {props.page === "login" && displayLogin()}
            </div>
        </div>
    );
}

export default SignUp;

