import { useRouteError } from "react-router-dom";
import Page401 from "./401";
import Page404 from "./404"

const ErrorPage = ()=>{
    const error:any = useRouteError();
    console.log(error);
    const servePage = ()=>{
        switch(error.status){
            case 401: 
                return <Page401 />
            case 404:
                return <Page404 />
        }
    }
    return(
        servePage()
    )
}

export default ErrorPage;