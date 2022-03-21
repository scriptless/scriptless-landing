import { NavLink } from 'react-router-dom'
import Card from '../components/Card'
import projectsData from '../data/projects.json';
import Project from '../components/projects/Project';
import RoundButton from '../components/buttons/RoundButton';

function Projects() {

    const totalProjects = projectsData.length;
    const projects = projectsData.map((data) => 
        <Card className="col-span-1 flex flex-col justify-center">
            <div className="grid grid-flow-row xl:grid-flow-col gap-5">
                <Project 
                    name={data.name}
                    description={data.description}
                    technologies={data.technologies}
                    buttons={data.buttons}
                />
            </div>
        </Card>
    )

    return (<>
            <div className="mb-8 flex flex-row space-x-3">
                <RoundButton to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 ml-0.5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                </RoundButton>
                <p className="font-semibold text-xl leading-8 dark:text-gray-200">All Projects ({totalProjects})</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {projects}
            </div>
        </>
    )
}

export default Projects