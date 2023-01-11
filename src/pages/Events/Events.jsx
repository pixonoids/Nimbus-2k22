import React, { useEffect, useState } from 'react';
import { EventCard } from '../../components';
import { useGetEvents } from '../../hooks/api/events';
import './Events.scss';

export default function Events() {
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [availableEvents, setAvailableEvents] = useState([]);
  const [finishedEvents, setFinishedEvents] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [typeFilter, setTypeFilter] = useState(0);
  const [deptFilter, setDeptFilter] = useState(null);

  const { data: events } = useGetEvents({});

  const departments = [
    null,
    'team_exe',
    'hermetica',
    'vibhav',
    'designocrats',
    'ojas',
    'c_helix',
    'meta_morph',
    'medextrous',
  ];

  const filter = ({ type = undefined, text = undefined, department }) => {
    if (!Array.isArray(events)) return;
    let _displayEvents = [];
    if (text !== undefined) {
      text = text.toLowerCase().trim();
      _displayEvents = events.filter((ev) => {
        let str = ev.name.toLowerCase();
        str += ` ${ev.username}`;

        return str.indexOf(text) !== -1;
      });
      setDisplayedEvents(_displayEvents);
    } else if (department !== undefined) {
      if (department === null) {
        _displayEvents = [...events];
      } else {
        _displayEvents = events.filter((ev) => ev.username == department);
      }
      setDisplayedEvents(_displayEvents);
    } else if (type !== undefined) {
      if (type === null) {
        _displayEvents = [...events];
      } else {
        _displayEvents = events.filter((ev) => ev.type == type);
      }
      setDisplayedEvents(_displayEvents);
    }
    console.log(_displayEvents);
  };

  //EFFECTS
  useEffect(() => {
    document.title = 'Events | Nimbus 2022';
  }, []);

  useEffect(() => {
    filter({ department: null });
  }, [events]);

  useEffect(() => {
    let _availableEvents = displayedEvents.filter(
      (ev) => new Date(ev.to).getTime() >= new Date().getTime()
    );
    let _finishedEvents = displayedEvents.filter(
      (ev) => new Date(ev.to).getTime() < new Date().getTime()
    );
    setAvailableEvents(_availableEvents);
    setFinishedEvents(_finishedEvents);
  }, [displayedEvents]);

  useEffect(() => {
    if (typeFilter !== null) setTypeFilter(null);
    filter({ text: searchText });
  }, [searchText]);

  useEffect(() => {
    if (typeFilter === null) {
      filter({ text: '' });
      return;
    }
    setDeptFilter(null);
    filter({ type: typeFilter });
  }, [typeFilter]);

  useEffect(() => {
    if (deptFilter === null) {
      filter({ text: '' });
      return;
    }
    filter({ department: deptFilter });
  }, [deptFilter]);

  // RENDER
  return (
    <div className="events">
      <div className="heading">
        <h1>Events</h1>
      </div>
      <div className="events-container">
        <div className="ctrl">
          <div className="search">
            <input
              type="search"
              placeholder="Search Event"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          {/* <div className="types">
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 0 ? null : 0))}
              dataValue="0"
              title="Departmental Events"
              style={{
                background:
                  typeFilter === null || typeFilter === 0 ? '#ff5722' : '#666',
              }}
            >
              D
            </div>
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 1 ? null : 1))}
              dataValue="1"
              title="Institutional Events"
              style={{
                background:
                  typeFilter === null || typeFilter === 1 ? '#8bc34a' : '#666',
              }}
            >
              I
            </div>
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 2 ? null : 2))}
              dataValue="2"
              title="Lectures"
              style={{
                background:
                  typeFilter === null || typeFilter === 2 ? '#00bcd4' : '#666',
              }}
            >
              L
            </div>
            <div
              className="type"
              onClick={() => setTypeFilter((tf) => (tf === 4 ? null : 4))}
              dataValue="4"
              title="Workshops"
              style={{
                background:
                  typeFilter === null || typeFilter === 4 ? '#ffeb3b' : '#666',
              }}
            >
              W
            </div>
          </div> */}
        </div>
        <div className="ctrl">
          {departments.map((dept) =>
            dept == null ? (
              <div
                key="all"
                className={`dept ${dept == deptFilter ? 'active' : ''}`}
                onClick={() => setDeptFilter(dept)}
              >
                All
              </div>
            ) : (
              <div
                key={dept}
                className={`dept ${dept == deptFilter ? 'active' : ''}`}
                onClick={() => setDeptFilter(dept)}
              >
                {dept}
              </div>
            )
          )}
        </div>
        <div className="events-list">
          {availableEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              active={
                new Date(event.from) < new Date() &&
                new Date(event.to) > new Date()
              }
            />
          ))}

          {!displayedEvents.length ? <div>loading...</div> : null}
        </div>
        <div className="events-list finished-events">
          {finishedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
