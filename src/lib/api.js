import axios from 'axios';
import { firebaseRef } from './firebase';

const APIS = {
  github: 'https://api.github.com/users/successkrisz/repos?sort=pushed'
};

export const fetchHomePageContent = () => {
  return new Promise(resolve => {
    firebaseRef.once('value')
    .then(snapshot => resolve(snapshot.val()));
  });
};

export const fetchGitHubAPI = () => {
  return new Promise(resolve => {
    axios.get(APIS.github)
    .then(response => {
      const repos = response.data.map(repo => ({
        id: repo.id,
        url: repo.html_url,
        name: repo.name,
        description: repo.description,
        pushedAt: repo.pushed_at
      }));
      resolve(repos);
    });
  });
};

export const sendMessage = message => {
  return new Promise(resolve => {
    firebaseRef.child('messages').push(message)
    .then(() => resolve());
  });
};
