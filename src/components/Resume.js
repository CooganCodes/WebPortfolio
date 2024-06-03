import React from 'react';
import './Resume.scss';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
        <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/resume.pdf">Download PDF</a>.</p>
      </object>
    </div>
  );
}

export default Resume;
