import React, { useEffect, useState } from 'react';

import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/api/auth';
import {
  useCreateEvent,
  useDeleteEvent,
  useEditEvent,
  useGetEvents,
} from '../../../hooks/api/events';
import { EventCard, EventDetailsCard } from '../../molecules';
import EditEvent from '../EditEvent/EditEvent';
import './Dashboard.scss';

export default function Dashboard() {
  const user = useSelector((state) => state.user);
  const { logout } = useAuth();
  const [editEvent, setEditEvent] = useState(null); // whether edit/create event form is open or not
  const [detailedEvent, setDetailedEvent] = useState(null);
  const createEventMutation = useCreateEvent();
  const editEventMutation = useEditEvent();
  const deleteEventMutation = useDeleteEvent();
  const queryClient = useQueryClient();
  const { data: events } = useGetEvents(
    { username: user?.username },
    { enabled: !!user }
  );

  // EFFECTS
  useEffect(() => {
    document.title = 'Dashboard | Nimbus 2021';
  }, []);

  // FUNCTIONS
  const handleDeleteEvent = async (event) => {
    console.log('Deleting Event ', event.id);
    await deleteEventMutation.mutate(
      { id: event.id },
      {
        onSuccess: () => {
          console.log('Deleted Event ' + event.id);
          setDetailedEvent(null);
          queryClient.invalidateQueries('events');
        },
        onError: (err) => {
          console.log(err.response.data?.error);
        },
      }
    );
  };

  const handleEditEvent = async (values, { setSubmitting }) => {
    const data = new FormData();
    for (const key in values) {
      if (['from', 'to'].includes(key)) {
        data.append(key, new Date(values[key]).toISOString());
      } else {
        data.append(key, values[key]);
      }
    }
    console.log(values, data);

    if (detailedEvent) {
      // Editing Event
      await editEventMutation.mutate(
        { data, id: detailedEvent.id },
        {
          onSuccess: () => {
            console.log('Event Edited');
            setDetailedEvent(null);
            queryClient.invalidateQueries('events');
          },
          onError: (err) => {
            console.log(err.response.data?.error);
          },
        }
      );
    } else {
      // Creating Event
      await createEventMutation.mutate(
        { data },
        {
          onSuccess: () => {
            console.log('Event Created');
            setDetailedEvent(null);
            queryClient.invalidateQueries('events');
          },
          onError: (err) => {
            console.log(err.response.data?.error);
          },
        }
      );
    }
    setSubmitting(false);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="user">Hi, {user?.name}</div>
        <div className="logout">
          <button onClick={logout}>Logout </button>
        </div>
      </div>
      <div className="container">
        {editEvent ? (
          <div className="edit-event">
            <div className="actions">
              <button onClick={() => setEditEvent(false)}> &lt;-Go Back</button>
            </div>
            <div className="event-form">
              <EditEvent event={detailedEvent} onSubmit={handleEditEvent} />
            </div>
          </div>
        ) : detailedEvent ? (
          <div className="admin-event-details">
            <div className="actions">
              <button onClick={() => setDetailedEvent(null)}>back</button>
              <button onClick={() => setEditEvent(true)}>edit</button>
              <button onClick={() => handleDeleteEvent(detailedEvent)}>
                delete
              </button>
            </div>
            <EventDetailsCard event={detailedEvent} />
          </div>
        ) : (
          <div className="your-events">
            <h1>Your Events</h1>
            <div className="ctrl">
              <button
                className={`btn ${editEvent ? 'cancel' : 'create'}`}
                onClick={() => setEditEvent((e) => !e)}
              >
                {editEvent ? 'Cancel' : 'Create Event'}
              </button>
            </div>
            <div className="events-list">
              {events ? (
                events.length ? (
                  events.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onClick={() => setDetailedEvent(event)}
                    />
                  ))
                ) : (
                  <div className="empty">
                    <p>You don't have any Events !</p>
                  </div>
                )
              ) : (
                <div className="loading">loading...</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
