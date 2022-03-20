import React from 'react'
import Badge from '../components/Badge'
import Card from '../components/Card'
import ProjectsCard from '../components/projects/ProjectsCard'

function Home() {
  return (
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 lg:gap-12">
                <ProjectsCard/>
                    <Card className="md:col-span-3 space-x-2 space-y-3" title="Tech Stack">
                        <Badge large label="React" color="blue"/>
                        <Badge large label="Vue" color="green"/>
                        <Badge large label="Angular" color="red"/>
                        <Badge large label="JavaScript" color="yellow"/>
                        <Badge large label="TypeScript" color="blue"/>
                        <Badge large label="Java" color="orange"/>
                        <Badge large label="Python" color="purple"/>
                        <Badge large label="PHP" color="red"/>
                        <Badge large label="NodeJS" color="green"/>
                        <Badge large label="Solidity" color="blue"/>
                        <Badge large label="JSON" color="gray"/>
                        <Badge large label="Linux" color="red"/>
                        <Badge large label="MongoDB" color="green"/>
                        <Badge large label="SQL" color="blue"/>
                        <Badge large label="NoSQL" color="blue"/>
                        <Badge large label="ExpressJS" color="indigo"/>
                        <Badge large label="NestJS" color="red"/>
                    </Card>
                    <Card className="md:col-span-5" title="Education">
                        <div className="my-4 grid grid-cols-4 gap-4">
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
                        <div className="my-4 grid grid-cols-4 gap-4">
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
                </div>
  )
}

export default Home