import axios from 'axios';
import { firebaseRef, firebaseDB } from './firebase';

export const fetchGitHubAPI = async (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos?sort=pushed`)
    .then(response => {
      return response.data.map(repo => ({
        id: repo.id,
        url: repo.html_url,
        name: repo.name,
        description: repo.description,
        pushedAt: repo.pushed_at
      }));
    });
};

export const sendMessage = async (message) => {
  return firebaseRef.child('messages').push(message);
};

// Firebase promise wrapper
export const fetchDB = async (route) => {
  return firebaseDB.ref(route).once('value')
    .then(snapshot => snapshot.val());
};
