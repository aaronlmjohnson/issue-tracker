import { useEffect, useState} from 'react';
import ProjectListing from '../components/ProjectListing';
import ProjectForm from './ProjectForm';
import { useFetchData } from '../hooks/useFetchData';
import useCheckAuthorization from '../hooks/useCheckAuthorization';

interface Project {
    _id: string;
    title: string;
    description: string;
    date_created: string;
}

const ProjectsPage = ()=>{
    const [activeProject, setActiveProject] = useState(null);
    const [toggleCreate, setToggleCreate] = useState(false);
    const [toggleUpdate, setToggleUpdate] = useState(null);
    const { data:projects, loading, error } = useFetchData("http://localhost:3001/projects");
    const {isAuthed:canCreateProject, isAdmin} = useCheckAuthorization();

    useEffect(()=>{
        isAdmin();
    }, []);

    const handleCreateButton = ()=>{
        if(toggleCreate) return;
        setToggleCreate(true);
    }

    return(
        !loading && <div className="p-7 flex flex-col gap-y-12">
            <h1 className="font-primary text-5xl font-extrabold">All Projects</h1>
            <div className="grid md:grid-cols-two justify-between gap-y-8">
                {projects && projects.map((project:any)=>{
                    return(
                        <ProjectListing  
                                project={project} 
                                key={project._id} 
                                setToggleUpdate = {setToggleUpdate}
                                setActiveProject = {setActiveProject}
                                toggleUpdate = {toggleUpdate}
                                setToggleCreate = {setToggleCreate}
                        />)
                })}
            </div>

            {/* {canCreateProject && <button className="create-new-project-button" onClick={handleCreateButton}>Add Project</button>} */}
            {
                <ProjectForm 
                    title={toggleCreate ? "Create Project" : "Update Project"}
                    project={toggleCreate ? null : activeProject} 
            />}
        </div>
    );
}

export default ProjectsPage;