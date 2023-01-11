import React from 'react';
import { getImageUrl } from '../../../utils/image';
import './MegaEventsCard.scss';

export default function MegaEventsCard({ event }) {
  return (
    <div
      className="mega-events-card"
      style={{
        backgroundImage: `url(${event.image ? getImageUrl(event.image) : ''})`,
      }}
    >
      <div className="card-content">
        <h1 className="card-title">{event.name}</h1>
        <p className="card-info">{event.shortDescription}</p>
        <p className="date">
          {new Date(event.from).getFullYear() > new Date().getFullYear()
            ? 'Coming Soon'
            : new Date(event.from).toDateString()}
        </p>
      </div>
    </div>
  );
}
