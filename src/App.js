import './App.css';
import Badge from './components/Badge';
import Card from './components/Card';
import Header from './components/Header';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App w-full flex flex-col justify-center items-center">
      <TopBar/>
      <div className="w-full container px-5 mx-auto">
        <Header/>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-12 my-8">
            <Card className="sm:col-span-7" title="Projects">
                <p>test132</p>
            </Card>
            <Card className="sm:col-span-3 space-x-1 space-y-2" title="Tech Stack">
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
                        <p>University Bonn-Rhein-Sieg, Germany</p>
                        <p className="text-gray-400 text-sm">BSc Computer science</p>
                    </div>
                    <p className="text-right text-blue-600 font-light">2019 - now</p>
                    <div className="col-span-3">
                        <p>University of Saarland, Germany</p>
                        <p className="text-gray-400 text-sm">BSc Computer science</p>
                    </div>
                    <p className="text-right text-blue-600 font-light">2018 - 2019</p>
                    <div className="col-span-3">
                        <p>Dietrich-Bonhoeffer-Gymnasium, Germany</p>
                        <p className="text-gray-400 text-sm">School education</p>
                    </div>
                    <p className="text-right text-blue-600 font-light">2013 - 2018</p>
                    <div className="col-span-3">
                        <p>Private Gymnasium Sacré Coeur Wien, Austria</p>
                        <p className="text-gray-400 text-sm">School education</p>
                    </div>
                    <p className="text-right text-blue-600 font-light">2012 - 2013</p>
                    <div className="col-span-3">
                        <p>Dietrich-Bonhoeffer-Gymnasium, Germany</p>
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
  );
}

export default App;
