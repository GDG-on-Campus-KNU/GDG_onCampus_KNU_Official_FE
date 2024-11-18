import { instance } from '@gdg/apis/instance/Api';
import { SigninAPIInterface } from '@gdg/types/OAuthInterface';

export const SigninGoogleAPI = (
  code: string,
  provider: string
): Promise<SigninAPIInterface> => {
  return instance
    .post('/api/auth/oauth', { code, provider })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      throw error;
    });
};
