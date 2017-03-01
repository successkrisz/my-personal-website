import axios from 'axios';

const APIS = {
  homePageContent: 'http://krisztianballa.com/api',
  github: 'https://api.github.com/users/successkrisz/repos?sort=pushed'
};

export const fetchHomePageContent = () => axios.get(APIS.homePageContent);

export const fetchGitHubAPI = () => axios.get(APIS.github);
