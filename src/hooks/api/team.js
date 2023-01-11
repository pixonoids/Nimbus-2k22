import { useQuery } from 'react-query';
import { getTeam } from '../../services/api/team';

export const useGetTeam = () => {
  const queryKey = ['team'];
  return useQuery(queryKey, () => getTeam(), {
    staleTime: 30 * 60 * 1000,
  });
};
