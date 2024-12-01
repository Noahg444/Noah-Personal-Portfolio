import React from 'react';
import './../styles/main.css';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src="https://via.placeholder.com/200" alt="Your Name" />
                <div className="about-text">
                    <p>
                        I am a software developer with a focus on creating efficient and impactful technology solutions.
                        My background includes a Bachelor of Science and a Master of Science in Computer Science from Miami University.
                        I have experience working with diverse technologies, including Python, Java, C++, React, and JavaScript,
                        applied across a variety of software development projects. My expertise spans both frontend and backend development,
                        covering areas such as REST API creation, UI/UX design, and database management.

                        My work includes leading the development of a smart virtual signage system, managing mobile application projects,
                        and implementing Agile practices to ensure successful project delivery. As a teaching assistant in web application programming,
                        I have guided students in full-stack development and coordinated a team to provide effective support. In addition,
                        I have experience managing technical teams and leading multiple projects simultaneously, ensuring that deliverables meet both
                        technical and business requirements.

                        My current graduate research focuses on privacy preservation in federated learning, reflecting my interest in advancing secure
                        and ethical technology practices. I approach challenges with a results-oriented mindset, emphasizing system integration, automation,
                        and continuous improvement.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;