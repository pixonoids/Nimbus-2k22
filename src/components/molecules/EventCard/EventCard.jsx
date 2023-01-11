import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EVENT_COLORS } from '../../../config/styles';
import { getImageUrl } from '../../../utils/image';

import './EventCard.scss';

export default function EventCard({ event, onClick, active }) {
  // PRE_RENDER
  const comingSoon =
    new Date(event.from).getFullYear() > new Date().getFullYear();

  // RENDER
  return (
    <div
      className={`event-card ${active ? 'active' : ''}`}
      onClick={onClick ? () => onClick(event) : () => null}
    >
      <Link to={onClick ? `/admin` : `/events/${event.id}`}>
        <div className="card">
          <div className="img">
            {event.image ? (
              <img
                src={event.image ? getImageUrl(event.image) : ''}
                alt="Event"
              />
            ) : null}
          </div>
          <div className="txt">
            <div
              className="title"
              style={{
                color: EVENT_COLORS[event.type],
              }}
            >
              {event.name}
            </div>
            <div className="event-club">{event.username}</div>
            <div className="desc">{event.shortDescription}</div>
            <div className="bottom">
              <div className="date">
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
              {/* <div className="venue">
                {event.venue.includes("http") ? (
                  <a href={event.venue}>{event.venue}</a>
                ) : (
                  event.venue
                )}
              </div> */}
            </div>
            {/* <div className="details">
            <Link to={`/events/${event.id}`}>View Event</Link>
          </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
