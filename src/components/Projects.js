import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Attendance app',
      description: 'I was one of the contributor to attendance app made by Product Team @ SST',
      skills: ['Django', 'REST Framework'],
    },
    {
      title: 'Aerofit and Yulu Data Analysis',
      description: 'As a part of project assignment I have done the project',
      skills: ['Jupyter','Pandas', 'Numpy'],
    },
    {
      title: 'Web scrapper',
      description: 'Built a web scrapper to scrape the data from flipkart and amazon',
      skills: ['Python', 'Beautiful Soup'],
    },
    {
      title: 'Travel Agency Backend',
      description: 'Built the travel agency backend with my teammates as a part of assignment',
      skills: [ 'Java', 'SpringBoot'],
    },
  ];

  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p>Explore a selection of my recent work.</p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="skills-used">
                <ul>
                  {project.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;