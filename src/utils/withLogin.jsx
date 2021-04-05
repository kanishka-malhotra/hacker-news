import { Redirect } from 'react-router';
import { isLoggedIn } from '../services/localApi';

// Higher order component to restrict autheticated routes
const withLogin = (WrappedComponent) => props =>
  isLoggedIn() ? (
    <WrappedComponent {...props} />
  ) : (
    <Redirect to="/login" />
  );

export default withLogin;
