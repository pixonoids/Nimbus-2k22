import { get } from './request';

export const getSponsors = (query) => {
  return get('sponsors', query);
};
