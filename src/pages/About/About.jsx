import React from 'react';
import './About.scss';
import { BsDownload } from 'react-icons/bs';

export default function About() {
  return (
    <div className="about">
      <div className="aboutpageHeading">
        {' '}
        <h3>ABOUT</h3>
      </div>

      <div className="about-container">
        <div className="about-heading">NIMBUS 2k22</div>
        <p className="theme">Udantya: An Occultic Cyberverse</p>
        <p className="about-text">
          NIMBUS, the annual national level tech fest_of NIT Hamirpur is one of
          North India's most distinguished and most anticipated event of the
          year. It is the conjugation of some of the finest technical minds in
          the country with a platform for them to promulgate their skills and
          aim to achieve a higher level of skill, polish the talents, and widen
          the exposure; with a healthy, competitive, and productive environment
          to support out toil and interests. Strong on its pillars of
          innovation, creativity, and teamwork, NIMBUS has been a gauge of
          technological eminence. NIMBUS has carved a niche for itself as one of
          the biggest technical fests in India.
          <br />
          <br />
          Over the years, NIMBUS has created its reputation for being the most
          magnificent and prestigious technical fest. NIMBUS is the technical
          convention wherein all departmental and core clubs, along with the
          societies of NIT Hamirpur, participate to create projects which can
          bridge the gap to the unachievable future. This NIMBUS'22 we shall
          expand our horizons and blur the lines between reality and illusion.
          This year, we will take a plunge into the virtual realm and rise above
          reality.
          <br />
          <br />
          This year NIMBUS is set to delve into the world of innovation and
          creativity with its theme“Udantya: An Occultic Cyberverse". The term
          "Udantya" is a Sanskrit word that means living beyond boundaries and
          limits. When reality becomes monotonous, unbearable, and achievable
          like these times, then a fascination with the magical world rises in
          us. The enchantment, to live in this magical realm is what one dreams
          of. The fire to achieve the impossible and accomplish the
          unaccomplished is what drives humanity.
        </p>
      </div>
      <div className="brochure-download">
        <a
          href="https://api.festnimbus.com/uploads/brochure.pdf"
          target="_blank"
          download
          rel="noreferrer"
        >
          <BsDownload className="links" />
          <div>Download Brochure</div>
        </a>
      </div>
      <div className="video-preview">
        <iframe
          src="https://www.youtube.com/embed/MOT5z3butwg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="about-footer">
        <p>
          <span>Email : </span>festnimbus@nith.ac.in
        </p>
      </div>
    </div>
  );
}
