import axios from 'axios';

import { BASE_URI } from '@gdsc/constants/URI';

export const instance = axios.create({
  baseURL: BASE_URI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
