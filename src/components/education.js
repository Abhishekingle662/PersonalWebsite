import React from 'react';
import './education.css'

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-heading text-center">
        <h2 style={{ color: '#5C5552'} }>education</h2>
      </div>
      <div className="container">
        <div className="education-horizontal-timeline">
          <div className="row">
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2 style={{ color: '#5C5552' }}>2023 - 2025</h2>
                  <h3 style={{ color: '#5C5552' }}>Master <span>of </span> Computer Science</h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 style={{ color: '#5C5552' }}>Indiana University Bloomington</h4>
                    <h5 style={{ color: '#5C5552' }}>Bloomington (Indiana), USA</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="single-horizontal-timeline">
                <div className="experience-time">
                  <h2 style={{ color: '#5C5552' }}>2019 - 2023</h2>
                  <h3 style={{ color: '#5C5552' }}>Bachelor <span>in </span> Computer Engineering</h3>
                </div>
                <div className="timeline-horizontal-border">
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <span className="single-timeline-horizontal"></span>
                </div>
                <div className="timeline">
                  <div className="timeline-content">
                    <h4 style={{ color: '#5C5552' }}>Savitribai Phule Pune University</h4>
                    <h5 style={{ color: '#5C5552' }}>Pune, India</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
