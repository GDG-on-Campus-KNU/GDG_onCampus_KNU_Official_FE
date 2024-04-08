import { signUpUserInterface } from '../../interface/UserInterface';
import { instance } from '../Api';

export const SignupAPI = (
  userData: signUpUserInterface
): Promise<signUpUserInterface> => {
  return instance
    .post('/api/auth/user', { userData })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
};
