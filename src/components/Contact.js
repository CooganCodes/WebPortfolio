import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [message, setMessage] = useState('');
  const [submissionTimes, setSubmissionTimes] = useState([]);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const now = Date.now();
    const recentSubmissions = submissionTimes.filter(time => now - time < 30 * 60 * 1000); // 30 minutes
    if (recentSubmissions.length >= 2) {
      setMessage('Please do not Spam! Try again in 30 minutes.');
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_USERID
    )
    .then((result) => {
      setMessage('Message sent successfully!');
      setSubmissionTimes([...recentSubmissions, now]);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, (error) => {
      setMessage('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Get in Touch</p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              Hi there! I'm always thrilled to connect with like-minded individuals. Whether you have a project in mind, want to brainstorm innovative ideas, or simply want to chat about the latest in technology, I'm here for it. Shoot me an email, and I'll get back to you as soon as possible. Let's make something amazing together!
            </p>
            <ul className="contact-details">
              <li><i className="fas fa-user"></i> Name: Coogan Kornya</li>
              <li><i className="fas fa-envelope"></i> Email: coogankornya@gmail.com</li>
              <li><i className="fas fa-language"></i> Languages Known: English</li>
            </ul>
            <div className="contact-socials">
              <a href="https://github.com/CooganCodes" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://linkedin.com/in/coogank" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Message Me</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
              <textarea name="message" rows="5" placeholder="Message.." value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
            {message && <p className="form-message">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
