import React from 'react';
import './../styles/main.css';

const Home = () => {
    return (
        <section id="home">
            <h1>Noah Greenbaum</h1>
            <div className="about-content">
                <div className="skills">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>Docker</li>
                    </ul>
                </div>

                <div className="interests">
                    <h2>Interests</h2>
                    <p>
                        My motivation for pursuing computer science stems from the ability to develop practical solutions to complex challenges.
                        I am particularly interested in enhancing privacy, optimizing system workflows, and building scalable technologies that
                        address real-world needs. My passion lies in bridging the gap between innovative ideas and their effective implementation.
                    </p>
                    <button onClick={() => window.location.href = '#projects'}>View My Work</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
