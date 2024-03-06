import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-heading text-center">
        <h2 style={{ color: '#5C5552' }}>contact me</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-form">
                  {/* Form remains unchanged */}
                  <form>
                    <div className="row">
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" placeholder="Name*" name="name" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-xs-12">
                        <div className="form-group">
                          <input type="email" className="form-control" id="email" placeholder="Email*" name="email" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea className="form-control" rows="8" id="comment" placeholder="Message"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="single-contact-btn">
                          <button className="contact-btn" type="submit">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-adress">
                  
                  <div className="contact-add-info">
                    
                    <div className="single-contact-add-info">
                      <h3>email</h3>
                      <p>abhishekingle662@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="hm-foot-icon">
                  <ul>
                    <li><a href="https://www.facebook.com/abhishek.ingle.988"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://github.com/Abhishekingle662"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://twitter.com/Abhishe55498479"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/in/abhishek-ingle/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.instagram.com/ingle_.abhishek._/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
