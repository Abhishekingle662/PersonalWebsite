import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookSquare, 
  faGithubSquare, 
  faTwitterSquare, 
  faLinkedin, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="single-contact-box">
            <div className="contact-adress">
              <div className="contact-add-info">
                <div className="single-contact-add-info">
                  <h3>Email</h3>
                  <p>abhishekingle662@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="hm-foot-icon">
              <ul>
                <li><a href="https://www.facebook.com/abhishek.ingle.988"><FontAwesomeIcon icon={faFacebookSquare} style={{ color: '#4267B2' }} /></a></li>
                <li><a href="https://github.com/Abhishekingle662"><FontAwesomeIcon icon={faGithubSquare} style={{ color: '#211F1F' }} /></a></li>
                <li><a href="https://twitter.com/Abhishe55498479"><FontAwesomeIcon icon={faTwitterSquare} style={{ color: '#1DA1F2' }} /></a></li>
                <li><a href="https://www.linkedin.com/in/abhishek-ingle/"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5' }} /></a></li>
                <li><a href="https://www.instagram.com/ingle_.abhishek._/"><FontAwesomeIcon icon={faInstagram} style={{ color: '#C13584' }} /></a></li>
              </ul>
            </div>
            <div className="single-contact-btn">
              <button className="contact-btn" type="submit">Email Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
