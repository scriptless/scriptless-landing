import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Projects from './pages/Projects';

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
                    <div className="my-6">
                        <HashRouter>
                            <Routes>
                                <Route exact path="/" element={<Home/>} />
                                <Route path="/projects" element={<Projects/>} />
                            </Routes>
                        </HashRouter>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
  );
}

export default App;
