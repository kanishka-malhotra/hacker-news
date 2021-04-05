export const getUsers = () => {
  const users = window.sessionStorage.getItem('users');
  if (users && users.length) return JSON.parse(users);
  return [];
};

export const setUsers = (users) => {
  window.sessionStorage.setItem('users', JSON.stringify(users));
};

export const getCurrentUser = () => window.sessionStorage.getItem('currentUser');

export const setCurrentUser = (username) => {
  window.sessionStorage.setItem('currentUser', username);
};

export const isLoggedIn = () => !!getCurrentUser();

export const loginUser = (loginData) => {
  const users = getUsers();
  const exists = !!users.find(({ username, password }) =>
    loginData.username === username && loginData.password === password);

  if (exists) {
    setCurrentUser(loginData.username);
    return true;
  }
  return false;
};

export const registerUser = (newUserData) => {
  const users = getUsers();
  const exists = !!users.find(({ username }) => newUserData.username === username);

  if (exists) {
    return false;
  }

  let updatedUsers = [...users, newUserData];
  setUsers(updatedUsers);
  setCurrentUser(newUserData.username);
  return true;
};

export const logoutUser = () => {
  window.sessionStorage.removeItem('currentUser');
};
