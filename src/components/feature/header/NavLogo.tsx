import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import gdgocknu_hyuminkim from '@gdg/assets/logo_contest/gdgocknu_hyunminkim.png';
import gdgocknu_yoonkyuwon from '@gdg/assets/logo_contest/gdgocknu_yoonkyuwon.png';
import gdgocknu_kimjoohoon from '@gdg/assets/logo_contest/gdgocknu_kimjoohoon.png';
import gdgocknu_sonheeju from '@gdg/assets/logo_contest/gdgocknu_sonheeju.png';
import gdgocknu_hayeon from '@gdg/assets/logo_contest/gdgoc_knu_hayeon.png';
import gdgocknu_doyeonkim from '@gdg/assets/logo_contest/gdgoc_knu_doyeonkim.png';
import gdgocknu_seojisu from '@gdg/assets/logo_contest/gdgoc_knu_seojisu.png';

import { MenuList } from './MainNavigation.style';

const CONTEST_START_DATE = '2024-12-01';

const logoSchedule = [
  {
    logo: gdgocknu_seojisu, // 7위: 3일
    startDate: CONTEST_START_DATE,
    endDate: '2024-12-03',
  },
  {
    logo: gdgocknu_doyeonkim, // 6위: 3일
    startDate: '2024-12-04',
    endDate: '2024-12-06',
  },
  {
    logo: gdgocknu_hayeon, // 5위: 3일
    startDate: '2024-12-07',
    endDate: '2024-12-09',
  },
  {
    logo: gdgocknu_sonheeju, // 4위: 3일
    startDate: '2024-12-10',
    endDate: '2024-12-12',
  },
  {
    logo: gdgocknu_kimjoohoon, // 3위: 7일
    startDate: '2024-12-13',
    endDate: '2024-12-19',
  },
  {
    logo: gdgocknu_yoonkyuwon, // 2위: 7일
    startDate: '2024-12-20',
    endDate: '2024-12-26',
  },
];

const getActiveLogo = () => {
  const currentDate = dayjs();
  const contestStart = dayjs(CONTEST_START_DATE);

  // console.log('Test Date:', currentDate.format('YYYY-MM-DD'));
  // 콘테스트 시작 전이거나 모든 일정 종료 후에는 현민님 로고
  if (currentDate.isBefore(contestStart) || currentDate.isAfter('2024-12-26')) {
    return gdgocknu_hyuminkim;
  }

  const activeLogo = logoSchedule.find(
    (schedule) =>
      (currentDate.isAfter(schedule.startDate) &&
        currentDate.isBefore(schedule.endDate)) ||
      currentDate.format('YYYY-MM-DD') === schedule.startDate ||
      currentDate.format('YYYY-MM-DD') === schedule.endDate
  );

  return activeLogo?.logo || gdgocknu_hyuminkim;
};

const NavLogo = ({ isTablet }: { isTablet: boolean }) => (
  <MenuList>
    <Link to='/'>
      <NavImg
        src={isTablet ? getActiveLogo() : getActiveLogo()}
        alt='logo'
        $isTablet={isTablet}
      />
    </Link>
  </MenuList>
);

export default NavLogo;

const NavImg = styled.img<{ $isTablet: boolean }>`
  margin-left: 20px;
  width: auto;
  height: ${(props) => (props.$isTablet ? '27px' : '33px')};
`;
