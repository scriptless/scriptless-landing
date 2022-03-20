import React from 'react'
import technologiesData from '../../data/technologies.json';
import Badge from '../Badge';

function LiveViewButton(props) {
    return <a href={props.url} target="_blank">
        <div className="inline-flex px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-500">
            Live
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
        </div>
    </a>;
}

function GithubButton(props) {
    return <a href={props.url} target="_blank">
        <div className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
        </div>
    </a>;
}

function Project(props) {
  return (
    <>
        <div className="col-span-3">
            <p className="dark:text-gray-200">{props.name}</p>
            <p className="text-gray-400 text-sm">{props.description}</p>
            <div className="mt-2 space-x-2">
                {props.technologies.map((technology) =>
                    <Badge label={technology} color={technologiesData[technology]}/>
                )}
            </div>
        </div>
        <div className="col-span-2 flex flex-col md:flex-row justify-end space-x-2">
            {props.buttons.map((button) => {
                switch(button.type) {
                    case 'GITHUB': return <GithubButton url={button.url}/>;
                    case 'LIVE': return <LiveViewButton url={button.url}/>;
                }
            })}
        </div>
    </>
  )
}

export default Project