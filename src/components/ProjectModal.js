import React, { useState, useEffect } from 'react';
import './ProjectModal.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectModal = ({ project, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 0); // trigger fade-in animation on mount
  }, []);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      onClose();
    }, 300); // match the duration of the fadeOut animation
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  if (!project) return null;

  return (
    <div className={`modal-overlay ${fadeIn ? 'fade-in' : ''} ${fadeOut ? 'fade-out' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>×</button>
        <Carousel showThumbs={false} showStatus={false}>
          {project.modalFiles.map((file, index) => (
            file.type === 'image' ? (
              <div key={index} className="carousel-media-container">
                <img src={file.file} alt={`${project.title} - ${index + 1}`} className="modal-media" />
              </div>
            ) : (
              <div key={index} className="carousel-media-container">
                <video controls className="modal-media">
                  <source src={file.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )
          ))}
        </Carousel>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.info}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-link">Visit Project</a>
      </div>
    </div>
  );
};

export default ProjectModal;
