import Badge from "../Badge"
import Card from "../Card"
import projectsData from '../../data/projects.json';
import { NavLink } from "react-router-dom";
import Project from "./Project";
import RoundButton from "../buttons/RoundButton";

function ProjectsCard() {

    const projects = projectsData.slice(0, 3).map((data) => 
        <div className="grid grid-flow-col gap-5">
            <Project 
                name={data.name}
                description={data.description}
                technologies={data.technologies}
                buttons={data.buttons}
            />
        </div>)

    return (
        <Card className="md:col-span-7 dark:text-gray-200" title="Projects">
            <div className="flex flex-col gap-6 xl:gap-5">
                {projects}
            </div>
            <div class="mt-5 relative flex justify-center">
                <RoundButton to="/projects">
                    <span>More projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 mr-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </RoundButton>
            </div>
        </Card>
    )
}

export default ProjectsCard

