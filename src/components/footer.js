import React from "react";
import './footer.css'
import waterPic from './water_pic.jpg';

function Footer() {
    return (
      <footer id="footer-copyright" className="footer-copyright">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <p>
              Design and developed by this guy!! <img src={waterPic} style={{ height: '100px', width: '100px', borderRadius: '50px' }}  alt="" />
            </p>
          </div>
        </div>
        <div id="scroll-Top">
          <div className="return-to-top">
            <i className="fa fa-angle-up " id="scroll-top"></i>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;