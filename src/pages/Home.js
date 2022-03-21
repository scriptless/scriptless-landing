import React from 'react'
import Badge from '../components/Badge'
import Card from '../components/Card'
import CurrentProjectsCard from '../components/projects/CurrentProjectsCard'
import technologiesData from '../data/technologies.json';

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 lg:gap-12">
        <CurrentProjectsCard/>
        <Card className="md:col-span-3" title="Tech Stack">
            <div className="flex flex-wrap gap-x-2 gap-y-2 xl:gap-y-3">
                {Object.keys(technologiesData).map((technology, i) => 
                    <Badge key={i} large label={technology} color={technologiesData[technology]}/>
                )}
            </div>
        </Card>
        <Card className="md:col-span-5" title="Education">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <p className="dark:text-gray-200">University Bonn-Rhein-Sieg, Germany</p>
                    <p className="text-gray-400 text-sm">BSc Computer science</p>
                </div>
                <p className="text-right text-blue-600 dark:text-blue-400 font-light">2019 - now</p>
                <div className="col-span-3">
                    <p className="dark:text-gray-200">University of Saarland, Germany</p>
                    <p className="text-gray-400 text-sm">BSc Computer science</p>
                </div>
                <p className="text-right text-blue-600 dark:text-blue-400 font-light">2018 - 2019</p>
                <div className="col-span-3">
                    <p className="dark:text-gray-200">Dietrich-Bonhoeffer-Gymnasium, Germany</p>
                    <p className="text-gray-400 text-sm">School education</p>
                </div>
                <p className="text-right text-blue-600 dark:text-blue-400 font-light">2013 - 2018</p>
                <div className="col-span-3">
                    <p className="dark:text-gray-200">Private Gymnasium Sacré Coeur Wien, Austria</p>
                    <p className="text-gray-400 text-sm">School education</p>
                </div>
                <p className="text-right text-blue-600 dark:text-blue-400 font-light">2012 - 2013</p>
                <div className="col-span-3">
                    <p className="dark:text-gray-200">Dietrich-Bonhoeffer-Gymnasium, Germany</p>
                    <p className="text-gray-400 text-sm">School education</p>
                </div>
                <p className="text-right text-blue-600 dark:text-blue-400 font-light">2011 - 2012</p>
            </div>
        </Card>
        <Card className="md:col-span-5" title="Experiences">
            <div className="grid grid-cols-8 gap-2">
                <div className="col-span-7">
                    <p className="dark:text-gray-200">net mobile AG (now Docomo Digital Germany), Düsseldorf</p>
                    <p className="text-gray-400 text-sm">Student internship</p>
                    <ul role="list" class="pl-1.5 my-2 divide-y dark:divide-slate-700 divide-dotted">
                        <li class="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Development of software for mobile devices</p>
                        </li>
                        <li class="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Development of "remote control app" using Android Studio, Java, Android SDK</p>
                        </li>
                    </ul>
                </div>
                <p className="text-right text-blue-600 dark:text-blue-400 font-light">2014</p>
                <div className="col-span-7">
                    <p className="dark:text-gray-200">Zhongding International Ltd. (Automotive industry), Beijing</p>
                    <p className="text-gray-400 text-sm">Student internship</p>
                    <ul role="list" class="pl-1.5 my-2 divide-y dark:divide-slate-700 divide-dotted">
                        <li class="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Development of CRM software using Java, IntelliJ IDEA, JSON</p>
                        </li>
                        <li class="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                            <p className="text-gray-500 dark:text-gray-300 text-sm">Administration of SQL databases for customer management</p>
                        </li>
                    </ul>
                </div>
                <p className="text-right text-blue-600 dark:text-blue-400 font-light">2016</p>
            </div>
        </Card>
    </div>
  )
}

export default Home