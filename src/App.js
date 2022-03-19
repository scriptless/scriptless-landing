import { useEffect, useState } from 'react';
import './App.css';
import Badge from './components/Badge';
import Card from './components/Card';
import Header from './components/Header';
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
                <Header/>
                <div className="grid grid-cols-1 sm:grid-cols-10 gap-12 my-8">
                    <Card className="sm:col-span-7" title="Projects">
                        <p className="dark:text-gray-200">test132</p>
                    </Card>
                    <Card className="sm:col-span-3 space-x-1 space-y-3" title="Tech Stack">
                        <Badge label="React" color="blue"/>
                        <Badge label="Vue" color="green"/>
                        <Badge label="Angular" color="red"/>
                        <Badge label="JavaScript" color="yellow"/>
                        <Badge label="TypeScript" color="blue"/>
                        <Badge label="Java" color="orange"/>
                        <Badge label="Python" color="purple"/>
                        <Badge label="PHP" color="red"/>
                        <Badge label="NodeJS" color="green"/>
                        <Badge label="Solidity" color="blue"/>
                        <Badge label="JSON" color="gray"/>
                        <Badge label="Linux" color="red"/>
                        <Badge label="MongoDB" color="green"/>
                        <Badge label="SQL" color="blue"/>
                        <Badge label="NoSQL" color="blue"/>
                    </Card>
                    <Card className="sm:col-span-5" title="Education">
                        <div className="my-4 grid grid-cols-4 gap-4">
                            <div className="col-span-3">
                                <p className="dark:text-gray-200">University Bonn-Rhein-Sieg, Germany</p>
                                <p className="text-gray-400 text-sm">BSc Computer science</p>
                            </div>
                            <p className="text-right text-blue-600 font-light">2019 - now</p>
                            <div className="col-span-3">
                                <p className="dark:text-gray-200">University of Saarland, Germany</p>
                                <p className="text-gray-400 text-sm">BSc Computer science</p>
                            </div>
                            <p className="text-right text-blue-600 font-light">2018 - 2019</p>
                            <div className="col-span-3">
                                <p className="dark:text-gray-200">Dietrich-Bonhoeffer-Gymnasium, Germany</p>
                                <p className="text-gray-400 text-sm">School education</p>
                            </div>
                            <p className="text-right text-blue-600 font-light">2013 - 2018</p>
                            <div className="col-span-3">
                                <p className="dark:text-gray-200">Private Gymnasium Sacré Coeur Wien, Austria</p>
                                <p className="text-gray-400 text-sm">School education</p>
                            </div>
                            <p className="text-right text-blue-600 font-light">2012 - 2013</p>
                            <div className="col-span-3">
                                <p className="dark:text-gray-200">Dietrich-Bonhoeffer-Gymnasium, Germany</p>
                                <p className="text-gray-400 text-sm">School education</p>
                            </div>
                            <p className="text-right text-blue-600 font-light">2011 - 2012</p>
                        </div>
                    </Card>
                    <Card className="sm:col-span-5" title="Experiences">
                    </Card>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
