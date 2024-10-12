import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';

import { BASE_URI } from '@gdg/constants/URI';

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

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = sessionStorage.getItem('refreshToken');
          const { data } = await axios.get(`${BASE_URI}/api/jwt/reissue`, {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          });

          sessionStorage.setItem('accessToken', data.accessToken);
          sessionStorage.setItem('refreshToken', data.refreshToken);

          instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

          return instance(originalRequest);
        } catch (refreshError) {
          console.error('Token refresh failed:', refreshError);
          throw new Error('토큰 갱신에 실패했습니다.');
        }
      }

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
