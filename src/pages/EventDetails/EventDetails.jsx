import React from 'react';
import { EventDetailsCard } from '../../components';
import { useGetEvents } from '../../hooks/api/events';
import './EventDetails.scss';

export default function EventDetails() {
  const id = window.location.pathname.split('/')[2];
  const { data } = useGetEvents({ id });
  const event = data?.[0];

  return (
    <div className="event-details">
      <div className="layer"></div>
      <div className="id"># {event?.id}</div>
      {event && <EventDetailsCard event={event} />}
    </div>
  );
}
