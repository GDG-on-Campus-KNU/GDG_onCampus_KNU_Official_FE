export interface signUpUserInterface {
  name: string;
  age: number;
  studentNumber: string;
  major: string;
  phoneNumber: string;
}

export interface userDataInterface {
  name: string;
  profileUrl: string;
  age: number;
  major: string;
  studentNumber: string;
  email: string;
  introduction: string;
  role: 'ROLE_TEMP' | 'ROLE_GUEST' | 'ROLE_MEMBER' | 'ROLE_CORE';
  teamInfos: { teamName: string; teamPageUrl: string }[];
}

export interface putUserDataInterface {
  name?: string;
  profileUrl?: string;
  age?: number;
  major?: string;
  studentNumber?: string;
  email?: string;
  introduction?: string;
}
