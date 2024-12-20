import React from 'react';
import './../styles/main.css';

const Home = () => {
    return (
        <section id="home">
            <div className='home-content'>
                <h1>Hi, My Name <br></br> Is <strong>Noah</strong></h1>
            </div>
            <div className="about-content">
                <div className="skills">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>Docker</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>Cloud Services</li>
                        <li>Agile Methodologies</li>
                        <li>UI/UX Design</li>
                        <li>REST APIs</li>
                        <li>Version Control</li>
                        <li>Linux Administration</li>
                        <li>Database Management</li>
                        <li>Relational Database</li>
                        <li>NoSQL Database</li>
                        <li>Non-relational Database</li>
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
