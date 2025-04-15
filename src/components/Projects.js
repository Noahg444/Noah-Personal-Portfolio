import React, { useState, useEffect } from 'react';
import './../styles/main.css';
import DuffyPaintImage from './../images/DuffyPaint.png';
import WeatherApp from './../images/WeatherApp.png';
import RemoteSensingPDF from './../projects/Remote_Sensing_Final_Project.pdf';

const Projects = () => {
    const [activePopup, setActivePopup] = useState(null);

    useEffect(() => {
        if (activePopup) {
            document.body.classList.add('popup-open');
        } else {
            document.body.classList.remove('popup-open');
        }
        
        return () => {
            document.body.classList.remove('popup-open');
        };
    }, [activePopup]);

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                <div className="project-card">
                    <h3>Duffy Paint Website</h3>
                    <img src={DuffyPaintImage} alt="Duffy Paint" />
                    <p>
                        A website for Duffy Paint featuring a front-end for customers to explore services and a back-end administrative page for the owner to manage content.
                    </p>
                    <a href="https://duffypaint.com" target="_blank" rel="noreferrer" className="projectLink">Visit Website</a>
                </div>
                
                <div className="project-card">
                    <h3>Weather App</h3>
                    <img src={WeatherApp} alt="Weather App" />
                    <p id='WeatherPTag'>
                    A responsive Weather App built using React that displays current weather conditions and a 30-day climatic forecast using the OpenWeatherMap API. 
                    This project showcases React component design, API integration, and responsive styling.
                    </p>
                    <a href="https://github.com/Noahg444/weather-app" target="_blank" rel="noreferrer" className="projectLink">View on GitHub</a>
                </div>

                <div className="project-card">
                    <h3>Urban Heat Islands in Ohio</h3>
                    <p>
                        This project was a final project for a remote sensing class. The project was to identify urban heat islands in Ohio using remote sensing data. The project
                        used Landsat 8 data to identify the urban heat islands using thresholding, k-means clustering, and random forest. The project was done in a group of 3 people.
                        Technologies used were EarthExplorer, Python3, and QGIS.
                    </p>
                    <div className="button-group">
                        <button onClick={() => setActivePopup('presentation')}>View Presentation</button>
                        <button onClick={() => setActivePopup('paper')}>View Paper</button>
                    </div>
                </div>
                
                {/* <div className="project-card">
                    <h3>Food Expiration Tracker</h3>
                    <p>
                        This is an application to track food that has entered the fridge. The motivation behind the application was to reduce the amount
                        of waste created from house mates storing food in the back of the fridge and forgetting about it. The technologies used in this
                        were SQLite, XAML, and C#.
                    </p>
                    <a href="https://github.com/Noahg444/FoodExpirationTracker" target="_blank" rel="noreferrer" className="projectLink">View on GitHub</a>
                </div>
                
                <div className="project-card">
                    <h3>2016 Summer Olympics Explorer</h3>
                    <p>
                        This application is a C# Maui application built with XAML that allows users to explore detailed information about the
                        2016 Summer Olympics. It features interactive ListViews for countries, sports, events, and athletes—with medal highlights—and
                        provides pop-up details for individual athletes. Efficiently managing data through an embedded TSV file and SQLite ensures fast performance after the initial setup.
                    </p>
                    <a href="https://github.com/Noahg444/2016-Summer-Olympics-Explorer-MAUI-.NET" target="_blank" rel="noreferrer" className="projectLink">View on GitHub</a>
                </div> */}
                


                <div className="project-card">
                        <h3>MineSweeper</h3>
                        <p>
                            This is an implementation of MineSweeper game using MVC architecture in Python. The game can be played in the console and has a simple interface or in
                            GUI mode using the Pygame library. Beyond normal functionality of minesweeper, there is a treasure icon which ends the game in a user win. The game also
                            has a test board loading option allowing the user to test knowing the game board layout. The technologies used in the project were Python3.
                        </p>
                        <a href="https://github.com/Noahg444/MineSweeper" target="_blank" rel="noreferrer" className="projectLink">View on GitHub</a>
                    </div>
                </div>
            
            {activePopup && (
                <div className="popup" onClick={() => setActivePopup(null)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        {activePopup === 'presentation' && (
                            <div className="iframe-container">
                                <iframe
                                    title="Presentation"
                                    className="presentation-iframe"
                                    src="https://docs.google.com/presentation/d/1fEjI35ylNH1P1dF69l99cw1Ja6P9rBWc/embed" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                        {activePopup === 'paper' && (
                            <div className="iframe-container">
                                <iframe 
                                    src={RemoteSensingPDF} 
                                    title="Paper" 
                                    className="paper-iframe"
                                ></iframe>
                            </div>
                        )}
                        <button className="close-button" onClick={() => setActivePopup(null)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;