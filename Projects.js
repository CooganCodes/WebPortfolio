import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.scss';

const projects = [
  {
    title: 'Chromachrophobia',
    tech: 'Unity / C#',
    type: 'image',
    file: require('../assets/images/project1.png').default,
    modalFiles: [
      { type: 'image', file: require('../assets/images/project1modal.png').default },
      { type: 'image', file: require('../assets/images/project1modal.png').default }
    ],
    description: 'As part of my "AI for Game Programming" course, I collaborated with a team to develop "Chromacrophobia," a unique 2D fighting game built using Unity and C#. Our project utilized a combination of advanced AI techniques and dynamic game mechanics to create an engaging and challenging experience. Throughout the development process, we implemented various AI algorithms to control non-player character (NPC) behaviors, designed intricate levels, and ensured a seamless user experience. This project showcases our ability to integrate complex AI concepts into interactive entertainment, and it reflects my commitment to pushing the boundaries of game development. You can download the game and explore it by clicking the button below.',
  },
  {
    title: 'Handtracking',
    tech: 'Python / OpenCV',
    type: 'image',
    file: require('../assets/images/project2.png').default,
    modalFiles: [
      { type: 'video', file: require('../assets/videos/project2.mp4').default }
    ],
    description: 'This project integrates computer vision and hand-tracking technology to create an interactive holographic experience. Using OpenCV, ArUco markers, and Mediapipe, it involves calibrating the camera and projector for precise alignment, followed by real-time hand tracking and projection onto a holographic build mat. The setup captures and projects hand movements, creating an immersive and dynamic interface. The project sets the foundation for future integration with a language model to enable advanced holographic interactions. This project combines cutting-edge technologies aimed at transforming digital interactions, paving the way for more intuitive and engaging user experiences. View the code by clicking the button below!',
  },
  {
    title: 'My Web Portfolio',
    tech: 'HTML / CSS / JavaScript / React',
    type: 'image',
    file: require('../assets/images/project3.png').default,
    modalFiles: [
      { type: 'image', file: require('../assets/images/project3modal.png').default },
    ],
    info: ' My web portfolio, the very website you are on right now, is a showcase of my skills in front-end web development, highlighting a collection of my key projects. The site is designed to be visually appealing and user-friendly, built using a combination of modern technologies to provide a seamless and interactive experience. HTML provides the structure and layout of the web pages, while CSS/SCSS is used for styling the site, ensuring a responsive and visually appealing design. SCSS preprocessor is utilized for better maintainability and scalability of the styles. JavaScript adds dynamic behavior to the website, enhancing user interactivity. The portfolio is built with React, a powerful JavaScript library for building user interfaces, ensuring a fast and efficient rendering of components. View the code by clicking the button below!',
    description: '',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLearnMore = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const items = document.querySelectorAll('.carousel__item');
    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add('carousel__item--main');
        item.classList.remove('carousel__item--left', 'carousel__item--right');
      } else if (index === (currentIndex - 1 + projects.length) % projects.length) {
        item.classList.add('carousel__item--left');
        item.classList.remove('carousel__item--main', 'carousel__item--right');
      } else if (index === (currentIndex + 1) % projects.length) {
        item.classList.add('carousel__item--right');
        item.classList.remove('carousel__item--main', 'carousel__item--left');
      } else {
        item.classList.remove('carousel__item--main', 'carousel__item--left', 'carousel__item--right');
      }
    });
  }, [currentIndex]);

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div key={index} className={`carousel__item`}>
            {project.type === 'image' ? (
              <img src={project.file} alt={project.title} className="project-media" />
            ) : (
              <video controls className="project-media">
                <source src={project.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="carousel__text">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <button onClick={() => handleLearnMore(project)} className="learn-more">
                Learn More
              </button>
            </div>
          </div>
        ))}
        <div className="carousel__btns">
          <button className="carousel__btn" onClick={prevSlide}>
            <div className="wrapper">
              <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                  <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
              </svg>
            </div>
          </button>
          <button className="carousel__btn" onClick={nextSlide}>
            <div className="wrapper">
              <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                  <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Projects;
