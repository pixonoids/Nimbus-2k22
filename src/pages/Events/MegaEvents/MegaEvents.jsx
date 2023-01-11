import React from 'react';
import MegaEventsCard from '../../../components/molecules/MegaEventsCard/MegaEventsCard';
import { useGetEvents } from '../../../hooks/api/events';
import './MegaEvents.scss';

export default function MegaEvents() {
  const { data: megaEvents } = useGetEvents({ type: 'MAJOR' });
  return (
    <div className="mega-events">
      <h1 className="heading">Mega Events</h1>
      {megaEvents?.length === 0 ? (
        <div className="comingsoon">Coming Soon!!</div>
      ) : (
        <div className="megaevents-container">
          {megaEvents?.map((event, index) => {
            return <MegaEventsCard key={event.id} event={event} />;
          })}
        </div>
      )}
    </div>
  );
}
