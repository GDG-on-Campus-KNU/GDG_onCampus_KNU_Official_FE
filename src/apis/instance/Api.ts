import { BASE_URI } from '@gdg/constants/URI';
import axios from 'axios';

export const instance = axios.create({
  baseURL: BASE_URI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
