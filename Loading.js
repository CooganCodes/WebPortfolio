import React, { useState, useEffect } from 'react';
import './Loading.scss';

const Loading = ({ onStart }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowButton(true);
          }, 100);
          return 100;
        }
        return prev + 3;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setFadeOut(true);
    setTimeout(() => {
      onStart();
    }, 1000);
  };

  return (
    <div className={`main-page ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader">
        <div className="spin-blend"></div>
        <div className="spin-blend"></div>
        <div className="spin-blend"></div>
        <div className="spin-blend"></div>
        <div className="spin-blend"></div>
      </div>
      <div className="loading-text">
        <div className="letter">L</div>
        <div className="letter">o</div>
        <div className="letter">a</div>
        <div className="letter">d</div>
        <div className="letter">i</div>
        <div className="letter">n</div>
        <div className="letter">g</div>
        <div className="letter">.</div>
        <div className="letter">.</div>
        <div className="letter">.</div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-percentage">{progress}%</div>
      </div>
      {showButton && (
        <div className="button-container">
          <a
            className="box__link button-animation"
            onClick={handleStart}
            href="#"
          >
            Start
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Loading;
