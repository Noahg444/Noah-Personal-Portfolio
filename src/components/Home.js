// src/pages/Home.jsx
import React from 'react';
import './../styles/main.css';

const skillGroups = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'PHP', 'C#', 'JSON', 'XML'],
  Frameworks: ['React', 'Node.js', '.NET'],
  'Cloud Platforms': ['AWS', 'Azure', 'Google Cloud'],
  'Tools & Technologies': ['Docker', 'Git', 'Linux Administration', 'CI/CD', 'PyTorch', 'TensorFlow', 'OpenAI', 'RESTful APIs'],
  Databases: ['Postgres', 'SQL', 'MongoDB', 'Firestore'],
  'Communication & Collaboration': ['Agile Development', 'Story Grooming', 'Spring Planning', 'Retrospectives', 'Code Reviews'],
};

const Home = () => (
  <section id="home">
    <div className="home-content">
      <h1 className="intro">
        <span className="intro-line1">My name</span>
        <span className="intro-line2">
          is <strong>Noah</strong>
        </span>
      </h1>
    </div>

    <div className="about-content">
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillGroups).map(([category, list]) => (
            <div key={category} className="skills-category">
              <h3>{category}</h3>
              <div className="chips">
                {list.map(skill => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="interests">
        <h2>Interests</h2>
        <p>
          My motivation for pursuing computer science stems from the ability to develop practical solutions to complex challenges.
          I am particularly interested in enhancing privacy, optimizing system workflows, and building scalable technologies that
          address real-world needs. My passion lies in bridging the gap between innovative ideas and their effective implementation.
        </p>
        <button onClick={() => (window.location.href = '#projects')}>
          View My Work
        </button>
      </div>
    </div>
  </section>
);

export default Home;