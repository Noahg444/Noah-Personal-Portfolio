import React, { useState } from 'react';
import ResumePDF from './../resume/Resume.pdf';
import './../styles/main.css';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(true);
  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => {
    setShowPreview(false);
    setShowResume(true);
  };

  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      {showPreview && (
        <div className="resume-preview">
          <iframe
            src={ResumePDF}
            title="Resume Preview"
            className="resume-preview-iframe"
          />
        </div>
      )}
      <div>
        <button onClick={handleViewResume}>View Resume</button>
      </div>
      {showResume && (
        <div className="popup">
          <div className="popup-content">
            <iframe
              src={ResumePDF}
              title="Full Resume"
              className="resume-full-iframe"
            />
            <button onClick={() => setShowResume(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Resume;