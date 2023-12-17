import { useActiveFormContext } from '../hooks/useActiveFormContext';
import ProjectForm from '../pages/ProjectForm';
import TicketForm from './TicketForm';

const FormDisplay = ()=>{
    const {activeForm} = useActiveFormContext();
   
    return(
        <>
        {activeForm === "create-project" && <ProjectForm  title={"Create Project"}/>}
        {activeForm === "update-project" && <ProjectForm  title={"Update Project"}/>}

        </>
    )
}

export default FormDisplay;