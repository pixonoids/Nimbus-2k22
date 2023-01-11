import { useMutation, useQuery } from 'react-query';
import {
  getEvents,
  createEvent,
  editEvent,
  deleteEvent,
} from '../../services/api/events';

export const useGetEvents = (
  { username, id, type, limit, offset },
  options = {}
) => {
  const query = { username, id, type, limit, offset };
  const queryKey = ['events', query];
  return useQuery(queryKey, () => getEvents(query), {
    ...options,
  });
};

export const useCreateEvent = () => {
  return useMutation(createEvent);
};
export const useEditEvent = () => {
  return useMutation(editEvent);
};
export const useDeleteEvent = () => {
  return useMutation(deleteEvent);
};
