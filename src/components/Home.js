import React from 'react';
import './../styles/main.css';

const Home = () => {
    return (
        <section id="home">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm Noah Greenbaum, a full-stack developer passionate about building impactful projects.</p>
            <button onClick={() => window.location.href = '#projects'}>View My Work</button>
        </section>
    );
};

export default Home;
