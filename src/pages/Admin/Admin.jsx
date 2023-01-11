import React from 'react';
import { useSelector } from 'react-redux';
import { Dashboard, Login } from '../../components';
import useHideNavigation from '../../hooks/utils/useHideNavigation';
import './Admin.scss';

export default function Admin() {
  useHideNavigation();
  const user = useSelector((state) => state.user);

  return <div className="admin">{user ? <Dashboard /> : <Login />}</div>;
}
