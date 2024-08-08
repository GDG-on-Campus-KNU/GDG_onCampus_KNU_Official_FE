import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, Location } from 'react-router-dom';

import Text from '@gdsc/components/common/typography/Text';

import MenuHamburger from '@gdsc/assets/MenuHamburger.svg';

import { useNavigationStore } from '@gdsc/store/useNavigationStore';

import AdminSideBar from './AdminSideBar';
import {
  TitleWrapper,
  SubtitleTextContainer,
  TitleTextContainer,
  HamburgerMenu,
} from './AdminTitle.style';
import MobileErrorPage from './MobileErrorPage';
import styled from '@emotion/styled';

const getTitle = (pathname: string): string => {
  switch (pathname) {
    case '/admin':
      return '상태 조정';
    case '/admin/team':
      return '팀 배치';
    case '/admin/document':
      return '서류 확인';
    default:
      return '관리자 페이지';
  }
};

const AdminTitle = () => {
  const pathName: Location = useLocation();
  const { isOpen, open } = useNavigationStore();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <HeaderLayout>
      {isMobile ? (
        <MobileErrorPage />
      ) : (
        <TitleWrapper>
          <TitleTextContainer>
            <SubtitleTextContainer>
              <Text size='lg' weight='bold'>
                Admin Page
              </Text>
              <Text size='sm'>GDSC KNU</Text>
            </SubtitleTextContainer>
            <Text size='xxl' weight='bold'>
              {getTitle(pathName.pathname)}
            </Text>
          </TitleTextContainer>
          <React.Fragment>
            <HamburgerMenu src={MenuHamburger} alt='menu' onClick={open} />
            <AdminSideBar open={isOpen} />
          </React.Fragment>
        </TitleWrapper>
      )}
    </HeaderLayout>
  );
};

export default AdminTitle;

const HeaderLayout = styled.div`
  width: 100%;
  height: calc(100% - 45px);
  margin-top: 45px;

  @media (max-width: 500px) {
    height: calc(100% - 75px);
    margin-top: 75px;
  }
`;
