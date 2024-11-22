import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useGetMyData } from '@gdg/apis/hooks/mypage/useGetMyData';
import HdDropDown from '@gdg/assets/HdDropDown.svg';
import HdDropUp from '@gdg/assets/HdDropUp.svg';
import NoneProfile from '@gdg/assets/NoneProfile.png';
import Text from '@gdg/components/common/typography/Text';
import { useHeaderDropDownState } from '@gdg/store/useHeaderDropDownStore';
import useUserStatusStore from '@gdg/store/useUserStatusStore';
import { userDataInterface } from '@gdg/types/UserInterface';

import { renderDropdownItems } from './StatusDropDownItems';
import Logo from './NavLogo';
import {
  DisplayHeader,
  DropDownImg,
  DropdownMenu,
  Header,
  ImgList,
  LinkText,
  Menu,
  MenuList,
} from './MainNavigation.style';

const navItems = [
  { to: '/introduce', text: '동아리 소개' },
  { to: '/apply', text: '지원하기' },
  { to: '/techblog', text: '테크블로그' },
  { to: '/community', text: '커뮤니티' },
];

const Navigation = () => (
  <Menu>
    {navItems.map(({ to, text }) => (
      <MenuList key={to}>
        <LinkText to={to}>
          <Text size='md' color='white'>
            {text}
          </Text>
        </LinkText>
      </MenuList>
    ))}
  </Menu>
);

type UserMenuProps = {
  myData: userDataInterface;
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
};

const UserMenu = ({
  myData,
  dropdownOpen,
  toggleDropdown,
  closeDropdown,
}: UserMenuProps) => (
  <Menu>
    <MenuList onClick={toggleDropdown}>
      <ImgList src={myData?.profileUrl || NoneProfile} alt='profile' />
      <div style={{ marginTop: '3px' }}>
        <Text color='white'>{myData?.name}</Text>
      </div>
      <DropDownImg src={dropdownOpen ? HdDropUp : HdDropDown} alt='dropdown' />
      <DropdownMenu
        isOpen={dropdownOpen}
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: dropdownOpen ? 1 : 0,
          y: dropdownOpen ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        {myData && renderDropdownItems(myData, closeDropdown)}
      </DropdownMenu>
    </MenuList>
  </Menu>
);

const LoginMenu = () => (
  <Menu>
    <MenuList>
      <Link to='/signin'>
        <Text size='md' color='white'>
          로그인
        </Text>
      </Link>
    </MenuList>
  </Menu>
);

const MainNavigation = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const isTablet = useMediaQuery({ query: '(max-width: 767px)' });

  const dropdownOpen = useHeaderDropDownState((state) => state.dropdownOpen);
  const toggleDropdown = useHeaderDropDownState(
    (state) => state.toggleDropdown
  );
  const closeDropdown = useHeaderDropDownState((state) => state.closeDropdown);

  const { data: MyData, error } = useGetMyData();
  const navigate = useNavigate();

  const setUser = useUserStatusStore((state) => state.setUser);

  useEffect(() => {
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [setUser]);

  useEffect(() => {
    if (MyData && MyData?.role === 'ROLE_TEMP') {
      alert(
        '추가 정보가 입력이 되지 않은 상태입니다. \n추가 정보 입력을 위해 페이지를 이동합니다.'
      );
      navigate('/signup');
    }

    if (MyData) {
      const userStatus = MyData.role.replace('ROLE_', '') as
        | 'TEMP'
        | 'GUEST'
        | 'MEMBER'
        | 'CORE';
      const userData = { name: MyData.name, status: userStatus };
      setUser(userData);
      sessionStorage.setItem('user', JSON.stringify(userData));
    } else if (error) {
      setUser(null);
      sessionStorage.removeItem('user');
    }
  }, [MyData, navigate, setUser, error]);

  // console.log(MyData);
  return (
    <Header>
      <DisplayHeader>
        <Menu>
          <Logo isTablet={isTablet} />
          <Navigation />
        </Menu>
        {accessToken && MyData ? (
          <UserMenu
            myData={MyData}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
            closeDropdown={closeDropdown}
          />
        ) : (
          <LoginMenu />
        )}
      </DisplayHeader>
    </Header>
  );
};

export default MainNavigation;
