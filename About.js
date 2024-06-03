import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece, faUsers, faRandom, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faReact, faJsSquare, faNodeJs, faPython, faJava, faPhp, faCuttlefish } from "@fortawesome/free-brands-svg-icons";
import "./About.scss";
import profilePic from "../assets/images/profile.jpg";

const About = () => (
  <div className="about">
    <h2>About Me</h2>
    <div className="qualities">
      <div className="quality">
        <FontAwesomeIcon icon={faPuzzlePiece} size="2x" className="icon" />
        <h3>Problem Solver</h3>
        <p>Excellent at identifying issues and developing efficient solutions.</p>
      </div>
      <div className="quality">
        <FontAwesomeIcon icon={faUsers} size="2x" className="icon" />
        <h3>Team Player</h3>
        <p>Works effectively within a team environment, collaborating and communicating with peers.</p>
      </div>
      <div className="quality">
        <FontAwesomeIcon icon={faRandom} size="2x" className="icon" />
        <h3>Adaptable</h3>
        <p>Quick to learn new technologies and adapt to changing environments.</p>
      </div>
      <div className="quality">
        <FontAwesomeIcon icon={faLightbulb} size="2x" className="icon" />
        <h3>Innovative</h3>
        <p>Continuously seeks out new challenges and opportunities to improve and innovate.</p>
      </div>
    </div>
    <div className="profile-skills">
      <div className="profile">
        <img src={profilePic} alt="Profile" />
        <h3>Who's this guy?</h3>
        <p>
        I'm a Computer Science student based in Orlando, Florida. With a deep passion for Artificial Intelligence and software development, I am dedicated to building innovative and intelligent solutions. I thrive on creating intuitive and dynamic user experiences through the integration of cutting-edge technologies. My academic journey and hands-on projects have equipped me with a solid foundation and a drive to continually learn and grow. Let's connect and collaborate on something groundbreaking!
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faHtml5} size="2x" className="icon html" />
          <div className="progress html">HTML</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faCss3Alt} size="2x" className="icon css" />
          <div className="progress css">CSS</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faReact} size="2x" className="icon react" />
          <div className="progress react">React</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faJsSquare} size="2x" className="icon js" />
          <div className="progress js">JavaScript</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faNodeJs} size="2x" className="icon node" />
          <div className="progress node">Node.js</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faPython} size="2x" className="icon python" />
          <div className="progress python">Python</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faJava} size="2x" className="icon java" />
          <div className="progress java">Java</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faPhp} size="2x" className="icon php" />
          <div className="progress php">PHP</div>
        </div>
        <div className="skill-bar">
          <FontAwesomeIcon icon={faCuttlefish} size="2x" className="icon c" />
          <div className="progress c">C</div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
