import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useGetMyData } from '@gdg/apis/hooks/mypage/useGetMyData';
import Apply from '@gdg/assets/Apply.svg';
import Community from '@gdg/assets/Community.svg';
import HdDropDown from '@gdg/assets/HdDropDown.svg';
import HdDropUp from '@gdg/assets/HdDropUp.svg';
import Home from '@gdg/assets/Home.svg';
import Introduce from '@gdg/assets/Introduce.svg';
import NavSlideClose from '@gdg/assets/NavSlideClose.svg';
import Techblog from '@gdg/assets/Techblog.svg';
import MobileBtn from '@gdg/components/common/button/MobileBtn';
import Text from '@gdg/components/common/typography/Text';
import { DropDownImg } from '@gdg/components/feature/header/MainNavigation';
import { useHeaderDropDownState } from '@gdg/store/useHeaderDropDownStore';
import { useNavigationStore } from '@gdg/store/useNavigationStore';
import useUserStatusStore from '@gdg/store/useUserStatusStore';

import {
  CloseButton,
  InformationBox,
  MobileDropdownMenu,
  MobileMenu,
  NameText,
  NavHeader,
  NavImg,
  NavList,
  NavMenu,
  NavSection,
  StyledImg,
} from './NavigationSlideMobile.style';
import { renderDropdownItems } from './StatusDropDownItems';

interface MenuItemProps {
  to: string;
  src: string;
  alt: string;
  label: string;
  onClick: () => void;
}

export const MenuItem = ({ to, src, alt, label, onClick }: MenuItemProps) => {
  return (
    <NavLink key={to} to={to} onClick={onClick}>
      <NavList>
        <NavImg src={src} alt={alt} />
        <Text color='white' size='md'>
          {label}
        </Text>
      </NavList>
    </NavLink>
  );
};

const NavigationSlideMobile = ({ open }: { open: boolean }) => {
  const { close } = useNavigationStore();
  const accessToken = sessionStorage.getItem('accessToken');
  const dropdownOpen = useHeaderDropDownState((state) => state.dropdownOpen);
  const toggleDropdown = useHeaderDropDownState(
    (state) => state.toggleDropdown
  );
  const closeDropdown = useHeaderDropDownState((state) => state.closeDropdown);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      close();
    }
  };

  const handleMenuItemClick = () => {
    close();
    closeDropdown();
  };

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

  const menuItems = [
    { to: '/', src: Home, alt: 'home', label: '홈' },
    {
      to: '/introduce',
      src: Introduce,
      alt: 'introduce',
      label: '동아리 소개',
    },
    { to: '/apply', src: Apply, alt: 'apply', label: '지원하기' },
    { to: '/techblog', src: Techblog, alt: 'techblog', label: '테크블로그' },
    { to: '/community', src: Community, alt: 'community', label: '커뮤니티' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <NavHeader>
            {accessToken ? (
              <InformationBox onClick={toggleDropdown}>
                <NameText weight='700' size='sm' whiteSpace='nowrap'>
                  {MyData?.name}
                </NameText>
                <DropDownImg
                  src={dropdownOpen ? HdDropUp : HdDropDown}
                  alt='dropdown'
                />
                <AnimatePresence>
                  {dropdownOpen && (
                    <MobileDropdownMenu
                      isOpen={dropdownOpen}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {MyData &&
                        renderDropdownItems(MyData, handleMenuItemClick)}
                    </MobileDropdownMenu>
                  )}
                </AnimatePresence>
              </InformationBox>
            ) : (
              <NavLink to='/signin' onClick={close}>
                <MobileBtn
                  backgroundColor='blue'
                  color='blue'
                  hoverColor='blue'
                  type='button'
                >
                  로그인
                </MobileBtn>
              </NavLink>
            )}

            <CloseButton onClick={close} onKeyDown={handleKeyDown} tabIndex={0}>
              <StyledImg src={NavSlideClose} alt='close' />
            </CloseButton>
          </NavHeader>
          <NavSection>
            <NavMenu>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.to}
                  to={item.to}
                  src={item.src}
                  alt={item.alt}
                  label={item.label}
                  onClick={handleMenuItemClick}
                />
              ))}
            </NavMenu>
          </NavSection>
        </MobileMenu>
      )}
    </AnimatePresence>
  );
};

export default NavigationSlideMobile;
