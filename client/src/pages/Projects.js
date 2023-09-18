import { useEffect, useState} from 'react';

const Projects = ()=>{
    const [projects, setProjects] = useState(null);
    useEffect(()=>{//go back to previous tutorial and fix how the api outputs data
        const fetchProjects = async ()=> {
            const response = await fetch('http://localhost:3001/api/projects');
            const json = await response.json();

            if(response.ok){
                setProjects(json);
            }
        }

        fetchProjects();
    }, []);

    return(
        <div className="projects">
            <h1>
                {projects && projects.map((project)=>{
                    return(
                        <div className="project" key={project._id}>
                            <h1>{project.title}</h1>
                            <p>{project.date_created}</p>
                            <p>{project.description}</p>
                        </div>
                    )
                })}
            </h1>
        </div>
    );
}

export default Projects;