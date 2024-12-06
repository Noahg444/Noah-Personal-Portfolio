import React from 'react';
import './../styles/main.css';
import DuffyPaintImage from './../images/DuffyPaint.png';

const Projects = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project-card">
                    <h3>Food Expiration Tracker</h3>
                    <p>
                        This is an application to track food that has entered the fridge. The motivation behind the application was to reduce the amount
                        of waste created from house mates storing food in the back of the fridge and forgetting about it. The technologies used in this
                        were SQLite, XAML, and C#
                    </p>
                    <a href="https://github.com/Noahg444/Maui-.NET-DontExpire" target="_blank" rel="noreferrer" className="projectLink">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>2016 Summer Olympics Explorer</h3>
                    <p>
                        This application is a C# Maui application built with XAML that allows users to explore detailed information about the
                        2016 Summer Olympics. It features interactive ListViews for countries, sports, events, and athletes—with medal highlights—and
                        provides pop-up details for individual athletes. Efficiently managing data through an embedded TSV file and SQLite ensures fast performance after the initial setup.
                    </p>
                    <a href="https://github.com/Noahg444/2016-Summer-Olympics-Explorer-MAUI-.NET" target="_blank" rel="noreferrer" className="projectLink">View on GitHub</a>
                </div>
                <div className="project-card">
                    <h3>Duffy Paint Website</h3>
                    <img src={DuffyPaintImage} alt="Duffy Paint" />
                    <p>
                        A website for Duffy Paint featuring a front-end for customers to explore services and a back-end administrative page for the owner to manage content.
                    </p>
                    <a href="https://duffypaint.com" target="_blank" rel="noreferrer" className="projectLink">Visit Website</a>
                </div>
                {/* ...add more project cards as needed... */}
            </div>
        </section>
    );
};

export default Projects;