import ProjectListing from '../components/ProjectListing';
import { useFetchData } from '../hooks/useFetchData';
import useCheckAuthorization from '../hooks/useCheckAuthorization';
import { useAuthContext } from '../hooks/useAuthContext';
import { IProject } from '../lib/types';

const ProjectsPage = ()=>{
    const { data:projects, loading:projectsLoading, error } = useFetchData("/projects");
    const {loading:navbarContentLoading} = useAuthContext();

    return(
        !navbarContentLoading && <div className="p-7 flex flex-col gap-y-12">
            <h1 className="font-primary text-5xl font-extrabold">All Projects</h1>
            {!projectsLoading && <div className="grid md:grid-cols-two justify-between gap-y-8">
                {projects && projects.map((project:IProject)=>{
                    return(
                        <ProjectListing  
                                project={project} 
                                key={project._id} 
                        />)
                })}
            </div>}
        </div>
    );
}

export default ProjectsPage;