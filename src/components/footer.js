import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import waterPic from './water_pic.jpg';
import './footer.css';

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        {showScroll &&
          <div className="return-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        }
      </div>
    </footer>
  );
}

export default Footer;
