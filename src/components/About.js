import React from 'react';
import './../styles/main.css';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src="https://via.placeholder.com/200" alt="Your Name" />
                <div className="about-text">
                    <p>I am a dedicated developer with a passion for creating innovative solutions. My journey in software development started with a curiosity for how things work, and it has grown into a fulfilling career.</p>
                    <p>With expertise in React, JavaScript, and other modern web technologies, I strive to build applications that not only meet user needs but also provide a seamless experience. I'm always exploring new tools and frameworks to enhance my skill set.</p>
                    <p>Beyond coding, I enjoy participating in hackathons, contributing to open-source projects, and connecting with fellow developers.</p>
                </div>
            </div>
        </section>
    );
};

export default About;