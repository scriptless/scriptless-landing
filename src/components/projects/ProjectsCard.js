import Badge from "../Badge"
import Card from "../Card"
import projectsData from '../../data/projects.json';
import { NavLink } from "react-router-dom";
import Project from "./Project";

function ProjectsCard() {

    const projects = projectsData.slice(0, 3).map((data) => 
        <Project 
            name={data.name}
            description={data.description}
            technologies={data.technologies}
            buttons={data.buttons}
        />
    )

    return (
        <Card className="md:col-span-7 dark:text-gray-200" title="Projects">
            <div className="my-4 grid grid-cols-5 gap-5">
                {projects}
            </div>
            <div class="relative flex justify-center">
                <NavLink to="/projects" className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                    {/*<svg class="-ml-1.5 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>*/}
                    <span>More projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 mr-0.5 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </NavLink>
            </div>
        </Card>
    )
}

export default ProjectsCard

