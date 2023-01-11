import { useMutation } from 'react-query';
import { postDiscord } from '../../services/api/discord';

export const usePostDiscord = ({ config } = {}) => {
  return useMutation(postDiscord, { ...config });
};
