export interface SigninAPIInterface {
  id: string;
  accessToken: string;
  refreshToken?: string; // 수정해야함.
  newMember: boolean;
}

export interface AuthAccessInterface {
  accessToken: string;
}
