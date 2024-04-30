import { instance } from '@gdsc/apis/Api';
import { SigninAPIInterface } from '@gdsc/interface/OAuthInterface';

export const SigninGoogleAPI = (
 code: string
): Promise<SigninAPIInterface> => {
  return instance
    .post('/api/auth/google/oauth', { code })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
};
