export interface SigninAPIInterface {
  id: string;
  accessToken: string;
  refreshToken: string;
  newMember: boolean;
}

export interface AuthAccessInterface {
  accessToken: string;
}
