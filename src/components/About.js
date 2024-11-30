import React from 'react';
import './../styles/main.css';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src="path/to/your/profile.jpg" alt="Your Name" />
                <p>I'm a developer with a strong interest in building applications that solve real-world problems. I enjoy working with modern technologies and always look forward to learning new skills.</p>
            </div>
        </section>
    );
};

export default About;