import { useEffect, useState } from 'react';
import './App.css';
import Badge from './components/Badge';
import Card from './components/Card';
import Header from './components/Header';
import Projects from './components/Projects';
import TopBar from './components/TopBar';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode'))
  }, []);

  function toggleDarkMode() {
      if(!darkMode) {
        localStorage.setItem('darkMode', true);
      } else {
        localStorage.removeItem('darkMode');
      }
      setDarkMode(!darkMode);
  }

  return (
      <div className={darkMode ? 'dark' : 'bg-white'}>
        <div className="w-full min-h-screen flex flex-col justify-start items-center dark:bg-slate-800">
            <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <div className="w-full container px-5 mx-auto">
                <Header darkMode={darkMode}/>
                <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6 lg:gap-12 my-8">
                    <Projects/>
                    <Card className="md:col-span-3 space-x-2 space-y-3" title="Tech Stack">
                        <Badge large={true} label="React" color="blue"/>
                        <Badge large={true} label="Vue" color="green"/>
                        <Badge large={true} label="Angular" color="red"/>
                        <Badge large={true} label="JavaScript" color="yellow"/>
                        <Badge large={true} label="TypeScript" color="blue"/>
                        <Badge large={true} label="Java" color="orange"/>
                        <Badge large={true} label="Python" color="purple"/>
                        <Badge large={true} label="PHP" color="red"/>
                        <Badge large={true} label="NodeJS" color="green"/>
                        <Badge large={true} label="Solidity" color="blue"/>
                        <Badge large={true} label="JSON" color="gray"/>
                        <Badge large={true} label="Linux" color="red"/>
                        <Badge large={true} label="MongoDB" color="green"/>
                        <Badge large={true} label="SQL" color="blue"/>
                        <Badge large={true} label="NoSQL" color="blue"/>
                        <Badge large={true} label="ExpressJS" color="indigo"/>
                        <Badge large={true} label="NestJS" color="red"/>
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
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
