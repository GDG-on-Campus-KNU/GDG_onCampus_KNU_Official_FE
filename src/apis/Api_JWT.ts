import axios from 'axios';

import { BASE_URI } from '@gdsc/constants/URI';

import { useTokenStore } from '@gdsc/store/useTokenStore';

export const instanceJWT = axios.create({
  baseURL: BASE_URI,
  timeout: 10000,
});

instanceJWT.interceptors.request.use(
  (config) => {
    const { getAccessToken } = useTokenStore();
    const accessToken = getAccessToken();
    if (accessToken !== undefined) {
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instanceJWT.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('404 페이지로 넘어가야 함!');
    }

    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (isTokenExpired()) await tokenRefresh();

      const accessToken = getToken();

      error.config.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  }
);
