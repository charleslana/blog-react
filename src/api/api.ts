import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/charleslana/data-blog/master/',
});

export default api;
