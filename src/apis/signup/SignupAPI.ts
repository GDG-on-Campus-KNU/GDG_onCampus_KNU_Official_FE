import { instanceJWT } from '@gdsc/apis/Api_JWT';

import { signUpUserInterface } from '@gdsc/types/UserInterface';

export const SignupAPI = (
  userData: signUpUserInterface
): Promise<signUpUserInterface> => {
  return instanceJWT
    .post('/api/user/additional-info', userData)
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
};
