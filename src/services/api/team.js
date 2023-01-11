import { getStatic } from './request';

export const getTeam = () => {
  return getStatic('/data/team.json');
};
