import { useEffect, useState} from 'react';
import ProjectListing from '../components/ProjectListing';
import CreateProjectForm from './CreateProjectForm';

interface Project {
    _id: string;
    title: string;
    description: string;
    date_created: string;
}

const Projects = ()=>{
    const [projects, setProjects] = useState<Array<Project>>([]);
    const [activeProject, setActiveProject] = useState(null);
    const [formActive, setFormActive] = useState(false);
    const [toggleCreate, setToggleCreate] = useState(false);
    const [toggleUpdate, setToggleUpdate] = useState(null);

    useEffect(()=>{
        const fetchProjects = async ()=> {
            const response = await fetch('http://localhost:3001/projects');
            const json = await response.json();

            if(response.ok){
                setProjects(json);
            }
        }

        fetchProjects();
    }, []);

    const handleCreateButton = ()=>{
        setToggleCreate((prevState:boolean)=> prevState ? false : true);
        setFormActive((prevState:boolean)=> prevState ? false : true);
    }

    return(
        <div className="projects">
                {projects && projects.map((project)=>{
                    return(
                        <ProjectListing  
                                project={project} 
                                key={project._id} 
                                setFormActive = {setFormActive}
                                setToggleUpdate = {setToggleUpdate}
                                setActiveProject = {setActiveProject}
                        />)
                })}
            <button className="create-new-project-button" onClick={handleCreateButton}>Add Project</button>
            {formActive && <CreateProjectForm 
                                title={toggleCreate ? "Create Project" : "Update Project"}
                                update={toggleUpdate} 
                                project={toggleCreate ? null : activeProject} 
                                setFormActive={setFormActive} 
                                formActive={formActive}
                            />}
        </div>
    );
}

export default Projects;