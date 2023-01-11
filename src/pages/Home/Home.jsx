import React from 'react';
import BCanvas from '../../components/canvas/BCanvas';
import { Toggel } from '../../components/organisms/';
import './Home.scss';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <Toggel />
      <div className="pop-up-text">
        <h1>
          <span>Nimbus 2k22</span>
          <span>Nimbus 2k22</span>
        </h1>
      </div>
      <div className="nimbus-theme">
        <svg className="udanta-text">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            UDANTYA
          </text>
        </svg>
        <h4 className="theme-line">AN OCCULTIC CYBERVERSE</h4>
        {/* <div className="date">22 April 2022 - 24 April 2022</div> */}
      </div>

      <BCanvas />

      <div className="nith-logo">
        <a href="https://nith.ac.in/" target="_blank" rel="noreferrer">
          <img src="./images/nith-blue.png" alt="nith logo ypk " />
        </a>
      </div>
      <div className="home-audio-button"></div>
      <div className="pixo-logo">
        <img src="./images/pixologocolored.png" width="45px" alt="" />
        <div className="pixo-text">made with 💖 by pixonoids</div>
      </div>
    </div>
  );
}
