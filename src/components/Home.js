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
                        I am passionate about full-stack development, cloud computing, and cybersecurity.
                        I enjoy building scalable web applications, exploring cloud services, and ensuring
                        the security of applications and data.
                    </p>
                    <button onClick={() => window.location.href = '#projects'}>View My Work</button>
                </div>
            </div>
        </section>
    );
};

export default Home;
