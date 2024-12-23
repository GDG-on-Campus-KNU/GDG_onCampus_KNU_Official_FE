import styled from '@emotion/styled';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, Location } from 'react-router-dom';

import MenuHamburger from '@gdg/assets/MenuHamburger.svg';
import Text from '@gdg/components/common/typography/Text';
import { useNavigationStore } from '@gdg/store/useNavigationStore';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

import AdminSideBar from './AdminSideBar';
import {
  TitleWrapper,
  SubtitleTextContainer,
  TitleTextContainer,
  HamburgerMenu,
} from './AdminTitle.style';
import MobileErrorPage from './MobileErrorPage';

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
    <Layout>
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
                <Text size='sm'>GDG on Campus KNU</Text>
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
    </Layout>
  );
};

export default AdminTitle;

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderLayout = styled(DisplayLayout)`
  padding-top: 52px;
  margin-top: 45px;

  @media (max-width: 500px) {
    margin-top: 75px;
    padding-bottom: 20px;
  }
`;
