import axios from 'axios';

const API_KEY = '3837a00efc1346c4bbd9db1878c3ab50'; // replace with your API key

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export default api;
