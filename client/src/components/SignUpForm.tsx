import FormInput from "./FormInput";

const SignUpForm = ()=>{
    return (
        <form action="" method="POST" className="sign-up-form text-base font-normal">
            <FormInput 
                forValue={"username"}
                classValue={"username-input"}
                nameValue={"username"}
                type={"text"}
                content={"Username:"}
            />
            <FormInput 
                forValue={"password"}
                classValue={"password-input"}
                nameValue={"password"}
                type={"password"}
                content={"Password:"}
            />
            <FormInput 
                forValue={"submit"}
                classValue={"submit-button"}
                nameValue={"submit"}
                type={"submit"}
                content={""}
                styling = {"border px-5 py-1"}
            />
        </form>
    );
}

export default SignUpForm;

//forValue:string, classValue:string, nameValue:string, type:string, content:string

