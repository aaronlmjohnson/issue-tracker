import { useActiveFormContext } from '../hooks/useActiveFormContext';
import ProjectForm from '../pages/ProjectForm';

const FormDisplay = ()=>{
    const {activeForm} = useActiveFormContext();
    // <ProjectForm 
    //                 title={activeForm === "create-project" ? "Create Project" : "Update Project"}
    //                 project={activeForm === "update-project" ? activeProject : null} 
    //         />
    return(
        <div>hi</div>
    )
}

export default FormDisplay;