import { useEffect, useState} from 'react';
import ProjectListing from '../components/ProjectListing';
import ProjectForm from './ProjectForm';
import { useFetchData } from '../hooks/useFetchData';
import useCheckAuthorization from '../hooks/useCheckAuthorization';
import { useActiveFormContext } from '../hooks/useActiveFormContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { IProject } from '../lib/types';

const ProjectsPage = ()=>{
    const { data:projects, loading:projectsLoading, error } = useFetchData("http://localhost:3001/projects");
    const {loading:navbarContentLoading} = useAuthContext()
    const {activeForm, updateTarget} = useActiveFormContext();

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

            {
                (activeForm === "create-project" || activeForm === "update-project") &&
                <ProjectForm 
                    title={activeForm === "create-project" ? "Create Project" : "Update Project"}
                    project={activeForm === "update-project" ? updateTarget : null} 
            />}
        </div>
    );
}

export default ProjectsPage;