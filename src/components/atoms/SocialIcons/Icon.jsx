import React from 'react';
import './Icon.scss';
import { BsInstagram, BsLinkedin, BsFacebook, BsYoutube } from 'react-icons/bs';

export default function Icon(props) {
  return (
    <div>
      <div className="icon-right">
        <a
          className="btn"
          href="https://www.instagram.com/festnimbus/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          className="btn"
          href="https://www.linkedin.com/in/fest-nimbus-nith-a56137202/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="icon-bottom">
        <a
          className="btn"
          href="https://www.youtube.com/c/FestNimbusNITH"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          className="btn"
          href="https://www.facebook.com/Pixonoids"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  );
}
