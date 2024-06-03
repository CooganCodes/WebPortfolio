import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const homeSection = document.getElementById('home');
      if (window.scrollY > homeSection.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStart = () => {
    setLoading(false);
  };

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loading onStart={handleStart} />
        ) : (
          <>
            <div className="stars-container">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
            </div>
            <section id="home" className="home section">
              <Home />
            </section>
            <Navbar isSticky={isSticky} />
            <main className="main-content">
              <section id="about" className="about section">
                <About />
              </section>
              <section id="projects" className="projects section">
                <Projects />
              </section>
              <section id="contact" className="contact section">
                <Contact />
              </section>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
