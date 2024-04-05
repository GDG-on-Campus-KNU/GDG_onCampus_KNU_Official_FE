import { signUpUserInterface } from '../../interface/UserInterface';
import { instance } from '../Api';

export const SignupAPI = async (userData: signUpUserInterface) => {
  instance
    .post('/api/auth/user', { userData })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
