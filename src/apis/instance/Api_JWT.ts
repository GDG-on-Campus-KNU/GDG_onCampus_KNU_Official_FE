import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';

import { BASE_URI } from '@gdsc/constants/URI';

// import { ReIssueSigninAPI } from '@gdsc/apis/signin/ReIssueSigninAPI';

// import { useTokenStore } from '@gdsc/store/useTokenStore';

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
      // const { getAccessToken } = useTokenStore();
      // const accessToken = getAccessToken();
      const accessToken = localStorage.getItem('accessToken');
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

  // instanceJWT.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   (error) => {
  //     if (error.response && error.response.status === 401) {
  //       const { setAccessToken } = useTokenStore();
  //       return ReIssueSigninAPI()
  //         .then((data) => {
  //           setAccessToken(data.accessToken);
  //           error.config.headers['Authorization'] = `Bearer ${data.accessToken}`;
  //           return instanceJWT(error.config);
  //         })
  //         .catch((error) => {
  //           return Promise.reject(error);
  //         });
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  return instance;
};

export const fetchInstance = createInstanceJWT({
  baseURL: BASE_URI,
});
