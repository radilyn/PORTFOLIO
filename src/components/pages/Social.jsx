import React from 'react'
import "./Social.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faSlack } from '@fortawesome/free-brands-svg-icons';


function Social () {
  return (
    <div className='social'>
      <div className="social-icons-container">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faSlack} />
        </a>
      </div>
    </div>
  );
};

export default Social;
