import axios from 'axios';

const USER_URL = 'https://reqres.in/api';
const IMAGES_URL = 'https://picsum.photos/v2';

export const userApi = axios.create({
  baseURL: USER_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const imageApi = axios.create({
  baseURL: IMAGES_URL,
  headers: { 'Content-Type': 'application/json' },
});
