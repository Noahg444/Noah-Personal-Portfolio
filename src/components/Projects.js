import React from 'react';
import './../styles/main.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project-card">
                    <h3>Project One</h3>
                    <p>This is an application to track food that has entered the fridge. The motivation behind the application was to reduce the amount of waste created from house mates storing food in the back of the fridge and forgetting about it. The technologies used in this were MySQL and MAUI .NET using XAML</p>
                    <a href="https://github.com/Noahg444/Maui-.NET-DontExpire" target="_blank" rel="DontExpire Project">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>Project Two</h3>
                    <p>A brief description of Project Two highlighting key features and technologies used.</p>
                    <a href="https://github.com/yourusername/project-two" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                </div>
                {/* ...add more project cards as needed... */}
            </div>
        </section>
    );
};

export default Projects;