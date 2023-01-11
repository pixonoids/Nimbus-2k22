import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { EVENT_COLORS } from '../../../config/styles';
import { getImageUrl } from '../../../utils/image';
import './EventDetailsCard.scss';

export default function EventDetailsCard({ event }) {
  const color = EVENT_COLORS[event?.type];
  const comingSoon =
    new Date(event.from).getFullYear() > new Date().getFullYear();

  return (
    <div className="event-details-card" key={event.id}>
      <div className="content">
        <div className="name" style={{ color }}>
          {event.name}
        </div>
        <div className="type" style={{ color, background: color + '55' }}>
          {event.type}
        </div>
        <div className="description">
          <ReactMarkdown>{event.description}</ReactMarkdown>
        </div>
        <div className="timing">
          {comingSoon ? (
            <div className=".coming-soon">Coming Soon </div>
          ) : (
            <>
              <FaCalendarAlt className="date-icon" />
              {new Date(event.from).toDateString()}
              <p>to</p>
              {new Date(event.to).toDateString()}
            </>
          )}
        </div>
        <button
          className="registration-url"
          style={{ background: color + 'aa' }}
        >
          <a href={event.registrationUrl} target="_blank" rel="noreferrer">
            Register Here
          </a>
        </button>
      </div>
      <div className="pic">
        <img src={getImageUrl(event.image)} alt="" />
      </div>
    </div>
  );
}
