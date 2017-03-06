import axios from 'axios';
import { firebaseRef } from './firebase';

const APIS = {
  github: 'https://api.github.com/users/successkrisz/repos?sort=pushed'
};

export const fetchHomePageContent = async () => {
  return firebaseRef.once('value')
    .then(snapshot => snapshot.val());
};

export const fetchGitHubAPI = async () => {
  return axios.get(APIS.github)
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
  return firebaseRef.child('messages').push(message)
};
