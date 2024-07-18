import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import Text from '@gdsc/components/typography/Text';

import NavigationLogo768 from '@gdsc/assets/NavigationLogo768.svg';
import NavigationLogo from '@gdsc/assets/NavigationLogo.svg';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const Header = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-navy);
  height: 45px;
  ${displayCenter}
`;

const DisplayHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  height: 45px;
  background-color: var(--color-navy);
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  background-color: var(--color-navy);
`;
const MenuList = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavImg = styled.img`
  margin-left: 20px;
`;

const LogoutDiv = styled.div`
  cursor: pointer;
`;

const MainNavigation = () => {
  const accessToken = localStorage.getItem('accessToken'); // 상태관리를 통해서 액세스 토큰 가져올 계획입니다. 수정해야됩니다.
  const isTablet = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Header>
      <DisplayHeader>
        <Menu>
          {isTablet ? (
            <MenuList>
              <NavLink to='/'>
                <NavImg src={NavigationLogo768} alt='logo' />
              </NavLink>
            </MenuList>
          ) : (
            <MenuList>
              <NavLink to='/'>
                <NavImg src={NavigationLogo} alt='logo' />
              </NavLink>
            </MenuList>
          )}
          <MenuList>
            <NavLink to='/introduce'>
              <Text color='white'>동아리 소개</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/apply'>
              <Text color='white'>지원하기</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/techblog'>
              <Text color='white'>테크블로그</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/community'>
              <Text color='white'>커뮤니티</Text>
            </NavLink>
          </MenuList>
        </Menu>
        {accessToken ? (
          <Menu>
            <MenuList>
              <LogoutDiv
                onClick={() => {
                  localStorage.removeItem('accessToken');
                  window.location.href = '/';
                }}
              >
                <Text color='white'>로그아웃</Text>
              </LogoutDiv>
            </MenuList>
            <MenuList>
              <NavLink to='/mypage'>
                <Text color='white'>마이페이지</Text>
              </NavLink>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuList>
              <NavLink to='/signin'>
                <Text color='white'>로그인</Text>
              </NavLink>
            </MenuList>
          </Menu>
        )}
      </DisplayHeader>
    </Header>
  );
};

export default MainNavigation;
