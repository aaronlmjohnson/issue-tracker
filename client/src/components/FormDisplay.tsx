import { useActiveFormContext } from '../hooks/useActiveFormContext';
import ProjectForm from '../pages/ProjectForm';
import DeleteConfirmation from './DeleteConfirmation';
import TicketForm from './TicketForm';

const FormDisplay = ()=>{
    const {activeForm} = useActiveFormContext();
   
    return(
        <>
        {activeForm === "create-project" && <ProjectForm  title={"Create Project"}/>}
        {activeForm === "update-project" && <ProjectForm  title={"Update Project"}/>}
        {activeForm === "delete-confirmation" && <DeleteConfirmation />}

        </>
    )
}

export default FormDisplay;