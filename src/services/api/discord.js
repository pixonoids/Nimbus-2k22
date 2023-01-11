import { post } from './request';

export const postDiscord = ({
  channel = 'hackathon',
  message,
  name,
  email,
}) => {
  post(`discord/${channel}`, { name, email, message });
};
