// ProjectCard.js
import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project, onLearnMore }) => (
  <div className="project-card">
    <div className="project-media">
      {project.type === 'image' ? (
        <img src={project.files[0]} alt={project.title} />
      ) : (
        <video controls>
          <source src={project.files[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
    <h3>{project.title}</h3>
    <p>{project.tech}</p>
    <p>{project.description}</p>
    <button className="learn-more" onClick={() => onLearnMore(project)}>Learn More</button>
  </div>
);

export default ProjectCard;
