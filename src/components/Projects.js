import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['React', 'Node.js', 'MongoDB'],
    },
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: ['React', 'Node.js', 'MongoDB'],
      },
      {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: ['React', 'Node.js', 'MongoDB'],
      },
      {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: ['React', 'Node.js', 'MongoDB'],
      },
      {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: ['React', 'Node.js', 'MongoDB'],
      },

    {
      title: 'Project 2',
      description: 'Praesent consectetur orci sed ante tincidunt, vitae aliquam elit mollis.',
      skills: ['Angular', 'Express.js', 'PostgreSQL'],
    },
    {
      title: 'Project 3',
      description: 'Fusce id velit id velit malesuada malesuada.',
      skills: ['Vue.js', 'Django', 'MySQL'],
    },

  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skills-used">
              <h4>Skills Used:</h4>
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
  );
};

export default Projects;