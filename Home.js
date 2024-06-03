import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {ReactTyped as Typed} from "react-typed";
import './Home.scss';

const Home = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 300);
    });
  }, []);

  return (
    <div className="home-content">
      <div className="stars-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <h1 className="animate">Hello, I'm <span className="highlight">Coogan Kornya</span></h1>
      <Typed
        strings={[
          "I'm a Full-Time Student.",
          "I love creating applications.",
          "Let's build something amazing together."
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <div className="buttons animate">
        <a href="#about"><button>View my work</button></a>
        <a href="/resume.pdf" target="_blank"><button>View Resume</button></a>
      </div>
    </div>
  );
};

export default Home;
