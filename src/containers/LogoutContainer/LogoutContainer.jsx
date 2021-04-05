/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../../services/localApi';

const LogoutContainer = () => {
  useEffect(() => {
    logoutUser();
  }, []);

  return <Redirect to="/login" />;
};

export default LogoutContainer;
