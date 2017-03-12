import firebase from 'firebase';
import config from '../../config/firebase.config.json';

firebase.initializeApp(config);

export const firebaseRef = firebase.database().ref();

export const firebaseDB = firebase.database();

export const auth = firebase.auth();

export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
};

export default firebase;
