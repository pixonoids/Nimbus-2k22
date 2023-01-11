import { Delete, get, post, put } from './request';

export const getEvents = (query) => {
  return get('events', query);
};

export const createEvent = ({ data }) => {
  return post('events', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const editEvent = ({ id, data }) => {
  return put(`events/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
export const deleteEvent = ({ id }) => {
  return Delete(`/events/${id}`);
};
