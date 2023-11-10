import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const Logo = <FontAwesomeIcon icon={faBug} className="rotate-45 text-primary" size="xl"/>

const displaySignup = ()=>{
    return (
        <>
            <SignUpForm />
            <div className="flex flex-col items-center">
                <p className="">Have an Account? <a href="/login" className="text-primary font-bold">Sign In</a></p>
                <p className="">Continue as <a href="/guest-login" className="text-primary font-bold">Guest</a></p>
            </div>
        </>
    );
}

const displayLogin = ()=>{
    return (
        <>
            <LoginForm />
            <div className="flex w-auto justiy-content center-content">
                <p className="">Have an Account? <a href="/sign-up">Sign up</a></p>
                <p className=""><a href="/guest-login">Continue as Guest</a></p>
            </div>
        </>
    );
}

const SignUp = (props: any)=>{
    return (
        <div className="bg-primary bg-opacity-[4] flex h-screen">
            <div className="m-auto bg-white h-fit max-w-lg min-w-xs w-1/2 py-8 px-12 ">
                <div className="h-12 w-auto flex justify-center center-content">
                    <div className="flex center-content justify-content w-fit h-fit my-auto">{Logo}</div>
                    <h1 className="font-primary font-extrabold text-4xl text-primary my-auto">Tracker</h1>
                </div>
                {props.page === "signup" && displaySignup()} 
                {props.page === "login" && displayLogin()}
            </div>
        </div>
    );
}

export default SignUp;

