import React from 'react';
import './LecturesCard.scss';
import { GoCalendar } from 'react-icons/go';
import { getImageUrl } from '../../../utils/image';
import someimage from '/images/pixoblack.jpg';


export default function LecturesCard({ event }) {
  const comingSoon =
    new Date(event.from).getFullYear() > new Date().getFullYear();
  return (
    <div className="lecture-card">
      <div className="card-contents">
        <div className="title">{event.name}</div>
        <div className="date">
          <div className="date-icon">
            <GoCalendar />
          </div>
          <div className="date-date">
            {event.from && comingSoon ? (
              <div className="end">Coming Soon</div>
            ) : (
              <>
                <div className="start">
                  <time dateTime={event.from}>
                    <span className="date">
                      {new Date(event.from).toDateString()}
                    </span>
                    <span className="time">
                      {new Date(event.from).toLocaleTimeString()}
                    </span>
                  </time>
                </div>
                <span className="to">-</span>
                <div className="end">
                  <time dateTime={event.to}>
                    <span className="date">
                      {new Date(event.to).toDateString()}
                    </span>
                    <span className="time">
                      {new Date(event.to).toLocaleTimeString()}
                    </span>
                  </time>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="description">{event.description}</div>
        <button className='registration-button' onClick={()=>{window.open(event.registrationUrl, "_blank")}}>Register</button>
      </div>
      {event.image ? (
        <img src={event.image ? getImageUrl(event.image) : ''} alt="Event" />
      ) : <img src={someimage} alt="Event" />}

    </div>
  );
}
