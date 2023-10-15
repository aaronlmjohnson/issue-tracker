import { useEffect, useState} from 'react';
import ProjectListing from '../components/ProjectListing';

interface Project {
    _id: string;
    title: string;
    description: string;
    date_created: string;
}

const Projects = ()=>{
    const [projects, setProjects] = useState<Array<Project>>([]);
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

    return(
        <div className="projects">
                {projects && projects.map((project)=>{
                    return(<ProjectListing  project={project} key={project._id}/>)
                })}
        </div>
    );
}

export default Projects;