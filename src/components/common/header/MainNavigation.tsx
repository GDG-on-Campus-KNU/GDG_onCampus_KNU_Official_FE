import { useMediaQuery } from 'react-responsive';
import { NavLink, Form } from 'react-router-dom';

import Text from '@gdsc/components/typography/Text';

import NavigationLogo from '@gdsc/assets/NavigationLogo.svg';
import NavigationLogo768 from '@gdsc/assets/NavigationLogo768.svg';

import { BASE_URI } from '@gdsc/constants/URI';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const Header = styled.div`
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
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;
const MenuList = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
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
              <NavLink to='/gdscknu'>
                <img src={NavigationLogo768} alt='logo' />
              </NavLink>
            </MenuList>
          ) : (
            <MenuList>
              <NavLink to='/gdscknu'>
                <img src={NavigationLogo} alt='logo' />
              </NavLink>
            </MenuList>
          )}
          <MenuList>
            <NavLink to='/gdscknu/introduce'>
              <Text color='white'>동아리 소개</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/gdscknu/apply'>
              <Text color='white'>지원하기</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/gdscknu/techblog/:tech'>
              <Text color='white'>테크블로그</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/gdscknu/community'>
              <Text color='white'>커뮤니티</Text>
            </NavLink>
          </MenuList>
        </Menu>
        {accessToken ? (
          <Menu>
            <MenuList>
              <Form action={`${BASE_URI}/api/auth/logout`} method='post'>
                <button>로그아웃</button>
              </Form>
            </MenuList>
            <MenuList>
              <NavLink to='/gdscknu/mypage'>
                <Text color='white'>마이페이지</Text>
              </NavLink>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuList>
              <NavLink to='/gdscknu/signin'>
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
