import React from 'react';
import './WorkshopCard.scss';
import { getImageUrl } from '../../../utils/image';
import someimage from '/images/pixoblack.jpg';
import poster from '/images/vissim workshop poster copy.jpg';
export default function WorkshopCard({ event }) {
  const comingSoon =
    new Date(event.from).getFullYear() > new Date().getFullYear();
  return (
    <div className="workshop-card">
      <div className="front">
        {event.image ? (
          <div className='image-wrapper'>
            {/* <img src={event.image ? getImageUrl(event.image) : ''} alt="Event" /> */}
            <img src={poster} alt="Event" />
          </div>
        ) : null}
        <h1 className="text-shadow">{event.name}</h1>
      </div>
      <div className="back">
        <h5 className="date">
          {event.from && comingSoon ? (
            <div className="end">Coming Soon</div>
          ) : (
            <>
              <div className="start">
                <time dateTime={event.from}>
                  <span className="date">
                    {new Date(event.from).toDateString()}
                  </span>
                  {/* <span className="time">
                    {new Date(event.from).toLocaleTimeString()}
                  </span> */}
                </time>
              </div>
              <span className="to">-</span>
              <div className="end">
                <time dateTime={event.to}>
                  <span className="date">
                    {new Date(event.to).toDateString()}
                  </span>
                  {/* <span className="time">
                    {new Date(event.to).toLocaleTimeString()}
                  </span> */}
                </time>
              </div>
            </>
          )}
        </h5>
        <p className="description">{event.description}</p>
        <button className='registration-button' onClick={()=>{window.open(event.registrationUrl, "_blank")}}>Register</button>
      </div>
    </div>
  );
}
