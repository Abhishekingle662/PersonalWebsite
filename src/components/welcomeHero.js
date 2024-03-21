// In your WelcomeHero.js or a higher-level component
import React from 'react';
import './welcome.css';

function WelcomeHero() {
  return (
    <div>
      <section id="welcome-hero" className="welcome-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="header-text">
                <h2>HI, I am Abhishek Ingle.</h2>
                <p>Computer Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WelcomeHero;
