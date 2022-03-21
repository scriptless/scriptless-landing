import React from 'react'
import technologiesData from '../../data/technologies.json';
import Badge from '../Badge';
import GithubButton from '../buttons/GithubButton';
import LiveViewButton from '../buttons/LiveViewButton';

function Project(props) {
  return (
    <>
        <div className="col-span-1 flex flex-col justify-center space-y-2">
            <div className="">
                <p className="dark:text-gray-200">{props.name}</p>
                <p className="text-gray-400 text-sm">{props.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {props.technologies.map((technology) =>
                    <Badge label={technology} color={technologiesData[technology]}/>
                )}
            </div>
        </div>
        <div className="col-span-1 flex flex-row items-center justify-start xl:justify-end gap-2">
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