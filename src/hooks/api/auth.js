import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CONFIG } from '../../config/config';
import { setUser } from '../../store/user';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const expires = localStorage.getItem('expires');
    if (expires > Date.now()) {
      let user = localStorage.getItem('user');
      if (user) {
        try {
          user = JSON.parse(user);
          dispatch(setUser(user));
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  }, []);

  const login = async ({ username, password }) => {
    try {
      const res = await axios.post(CONFIG.apiBaseUrl + '/auth', {
        username,
        password,
      });
      const { data } = res;
      if (data.error) {
        console.log(data.error);
        setError(error);
      } else {
        setError(null);
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('expires', Date.now() + 1 * 60 * 60 * 1000);
        localStorage.setItem('user', JSON.stringify(data.user));
        dispatch(setUser(data.user));
      }
    } catch (err) {
      setError(err.response?.data?.error);
    }
  };

  const logout = async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    dispatch(setUser(null));
  };

  return { login, logout, error };
};
