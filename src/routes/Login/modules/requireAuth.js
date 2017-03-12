import { isAuthenticated } from 'lib/firebase';

export const requireAuth = (nextState, replace, callback) => {
  if (!isAuthenticated()) replace('/login');
  return callback();
};

export const redirectIfLoggedIn = (nextState, replace, callback) => {
  if (isAuthenticated()) replace('/admin');
  return callback();
};
