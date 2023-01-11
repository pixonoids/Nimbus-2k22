import { useQuery } from 'react-query';
import { getSponsors } from '../../services/api/sponsors';

export const useGetSponsors = ({ id }, options = {}) => {
  const query = { id };
  const queryKey = ['sponsors', query];
  return useQuery(queryKey, () => getSponsors(query), {
    ...options,
  });
};
