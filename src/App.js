import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import './styles/main.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Resume />
      </div>
    </>
  );
}

export default App;
