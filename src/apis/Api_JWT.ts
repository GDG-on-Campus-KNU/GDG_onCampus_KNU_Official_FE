import axios from 'axios';

import { BASE_URI } from '@gdsc/constants/URI';

// import { ReIssueSigninAPI } from '@gdsc/apis/signin/ReIssueSigninAPI';

// import { useTokenStore } from '@gdsc/store/useTokenStore';

export const instanceJWT = axios.create({
  baseURL: BASE_URI,
  timeout: 10000,
});

instanceJWT.interceptors.request.use(
  (config) => {
    // const { getAccessToken } = useTokenStore();
    // const accessToken = getAccessToken();
    const accessToken = localStorage.getItem('accessToken');
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
