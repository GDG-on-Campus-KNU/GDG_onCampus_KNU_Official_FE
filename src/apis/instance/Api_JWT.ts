import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import { jwtDecode } from 'jwt-decode';

import { BASE_URI } from '@gdsc/constants/URI';

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;
  const decodedToken: { exp: number } = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTime;
};

export const createInstanceJWT = (
  config: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = sessionStorage.getItem('accessToken');
      if (accessToken !== undefined) {
        config.headers['Content-Type'] = 'application/json';
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error: unknown) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      let currentAccessToken = sessionStorage.getItem('accessToken');

      if (currentAccessToken && isTokenExpired(currentAccessToken)) {
        try {
          const refreshToken = sessionStorage.getItem('refreshToken');
          const { data } = await axios.get(`${BASE_URI}/api/jwt/reissue`, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          sessionStorage.setItem('accessToken', data.accessToken);
          sessionStorage.setItem('refreshToken', data.refreshToken);

          currentAccessToken = data.accessToken;
        } catch (error) {
          console.error('토큰 갱신 실패:', error);
          throw new Error('토큰 갱신에 실패했습니다.');
        }
      }

      if (currentAccessToken) {
        config.headers.Authorization = `Bearer ${currentAccessToken}`;
      }

      return config;
    },
    (error: unknown) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response) {
        return Promise.reject(error.response.data);
      } else if (error.request) {
        return Promise.reject(
          '네트워크 오류입니다. 인터넷 연결을 확인해주세요.'
        );
      } else {
        return Promise.reject('요청을 전송할 수 없습니다.');
      }
    }
  );

  return instance;
};

export const fetchInstance = createInstanceJWT({
  baseURL: BASE_URI,
});
