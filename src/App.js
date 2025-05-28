import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Background from './components/Background';
import './styles/main.css';

function App() {
  return (
    <>
      <div className="App">
        <Background />
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
