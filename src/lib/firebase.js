import firebase from 'firebase';
import config from '../../config/firebase.config.json';

firebase.initializeApp(config);

export const firebaseRef = firebase.database().ref();
export default firebase;
