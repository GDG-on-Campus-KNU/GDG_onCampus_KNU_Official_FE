import { fetchInstance } from '@gdsc/apis/instance/Api_JWT';

import { signUpUserInterface } from '@gdsc/types/UserInterface';

export const SignupAPI = (
  userData: signUpUserInterface
): Promise<signUpUserInterface> => {
  return fetchInstance
    .put('/api/user', userData)
    .then(function (response) {
      // console.log(response);
      return response.data;
    })
    .catch(function (error: unknown) {
      console.log(error);
      throw error;
    });
};
