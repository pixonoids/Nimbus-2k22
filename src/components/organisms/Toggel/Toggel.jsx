import React from 'react';
import './Toggel.scss';
import { Link } from 'react-router-dom';
export default function Toggle() {
  return (
    <>
      <div className={`outerDiv`}>
        <div className="hoverDiv">
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          {/* <Link to="/schedule">
            <li>Schedule</li>
          </Link> */}
          <Link to="/clubs">
            <li>Clubs</li>
          </Link>
          <Link to="/sponsors">
            <li>Sponsors</li>
          </Link>
          <Link to="/team">
            <li>Team</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </div>
      </div>
    </>
  );
}
