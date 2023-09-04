import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faYoutube,    faFacebook,    faTwitter,    faInstagram  } from "@fortawesome/free-brands-svg-icons";
import './socialfollow.css';

const SocialFollow = () => {
  return (
    <div className='gpt3__socialfollow'>
        <div>
        <h1 className="gradient__text">For latest updates, follow us and subscribe. </h1>
        </div>
        <div className='gpt3__socialfollow-content'>
          <a href="https://www.youtube.com/channel/UCEbcxPJh-gZPywiRmfk-PYA" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/BollywoodKiDhun/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com/bollywoodkidhun?igshid=YmMyMTA2M2Y=" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    </div>
  )
}

export default SocialFollow
