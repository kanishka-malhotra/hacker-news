import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { loginUser, registerUser } from '../../services/localApi';

import './LoginContainer.css';

const LoginContainer = ({ isLoginMode }) => {
  const history = useHistory();
  const [loginMode, setLoginMode] = useState(isLoginMode);
  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    setLoginMode(isLoginMode);
  }, [isLoginMode]);

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const isFormInvalid = () => !(formValues.username && formValues.password)

  const handleLogin = () => {
    const success = loginUser(formValues);

    if (success) {
      history.push('/');
    } else {
      setError('Incorrect credentials, please try again.');
    }
  };

  const handleRegister = () => {
    const success = registerUser(formValues);

    if (success) {
      history.push('/');
    } else {
      setError('User already registered. Please login.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormInvalid()) return;

    if (loginMode) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  const getFormModeName = () => loginMode ? 'Login' : 'Register';

  return (
    <div className="login-container">
      <h2>{getFormModeName()}</h2>
      {error && <div className="login-container__error">{error}</div>}
      <form onSubmit={handleSubmit} className="login-container__form">
        <label htmlFor="username">
          Enter username
          <input
            id="username"
            name="username"
            type="text"
            aria-label="Enter user name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Enter password
          <input
            id="password"
            name="password"
            type="password"
            aria-label="Enter password"
            onChange={handleChange}
          />
        </label>
        <div>
          <button
            type="submit"
            className="btn-submit"
            disabled={isFormInvalid()}
          >
            {getFormModeName()}
          </button>
        </div>
      </form>
      <div>
        {loginMode ? (
          <>
            New user? <Link to="/signup">Register here</Link>
          </>
        ) : (
          <>
            Existing user? <Link to="/login">Login here</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;
