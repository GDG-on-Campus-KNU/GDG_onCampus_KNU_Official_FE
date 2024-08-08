//type: 데이터 타입
export type PersonData = {
  id: number;
  track: string | null;
  name: string;
  studentNumber: string;
  email: string;
  phoneNumber: string;
  teams: {
    teamName: string;
    TeamPageUrl: string;
  }[];
  role: string;
};

export type Person = {
  data: PersonData[];
  page: number;
  hasNext: boolean;
  totalPage: number;
};

//tableData: 테이블 안에 들어갈 코어 데이터
export const tableData: Person = {
  data: [
    {
      id: 1,
      track: 'FE',
      name: '신채원',
      studentNumber: '2020114614',
      email: 'scwcart2004@gmail.com',
      phoneNumber: '010-3167-7193',
      teams: [],
      role: 'ROLE_CORE',
    },
    {
      id: 2,
      track: 'FE',
      name: '김규회',
      studentNumber: '2019115615',
      email: 'k546kh@gmail.com',
      phoneNumber: '010-4922-7687',
      teams: [],
      role: 'ROLE_CORE',
    },
    {
      id: 3,
      track: 'BE',
      name: '권수현',
      studentNumber: '2021114166',
      email: 'kwonsh4396@gmail.com',
      phoneNumber: '010-4767-4396',
      teams: [],
      role: 'ROLE_GUEST',
    },
    {
      id: 4,
      track: 'FE',
      name: '신채원',
      studentNumber: '2020114614',
      email: 'scwcart2004@gmail.com',
      phoneNumber: '010-3167-7193',
      teams: [],
      role: 'ROLE_CORE',
    },
    {
      id: 5,
      track: 'FE',
      name: '김규회',
      studentNumber: '2019115615',
      email: 'k546kh@gmail.com',
      phoneNumber: '010-4922-7687',
      teams: [],
      role: 'ROLE_CORE',
    },
    {
      id: 6,
      track: 'BE',
      name: '권수현',
      studentNumber: '2021114166',
      email: 'kwonsh4396@gmail.com',
      phoneNumber: '010-4767-4396',
      teams: [],
      role: 'ROLE_GUEST',
    },
    {
      id: 7,
      track: 'FE',
      name: '신채원',
      studentNumber: '2020114614',
      email: 'scwcart2004@gmail.com',
      phoneNumber: '010-3167-7193',
      teams: [],
      role: 'ROLE_CORE',
    },
    {
      id: 8,
      track: 'FE',
      name: '김규회',
      studentNumber: '2019115615',
      email: 'k546kh@gmail.com',
      phoneNumber: '010-4922-7687',
      teams: [],
      role: 'ROLE_CORE',
    },
    {
      id: 9,
      track: 'BE',
      name: '권수현',
      studentNumber: '2021114166',
      email: 'kwonsh4396@gmail.com',
      phoneNumber: '010-4767-4396',
      teams: [],
      role: 'ROLE_GUEST',
    },
  ],
  page: 0,
  hasNext: false,
  totalPage: 1,
};
