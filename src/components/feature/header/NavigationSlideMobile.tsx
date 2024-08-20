import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import MobileBtn from '@gdsc/components/common/button/MobileBtn';
import Text from '@gdsc/components/common/typography/Text';
import { DropDownImg } from '@gdsc/components/feature/header/MainNavigation';

import Apply from '@gdsc/assets/Apply.svg';
import Community from '@gdsc/assets/Community.svg';
import HdDropDown from '@gdsc/assets/HdDropDown.svg';
import HdDropUp from '@gdsc/assets/HdDropUp.svg';
import Home from '@gdsc/assets/Home.svg';
import Introduce from '@gdsc/assets/Introduce.svg';
import NavSlideClose from '@gdsc/assets/NavSlideClose.svg';
import Techblog from '@gdsc/assets/Techblog.svg';

import { useGetMyData } from '@gdsc/apis/hooks/mypage/useGetMyData';

import { useHeaderDropDownState } from '@gdsc/store/useHeaderDropDownStore';
import { useNavigationStore } from '@gdsc/store/useNavigationStore';
import useUserStatusStore from '@gdsc/store/useUserStatusStore';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import { renderDropdownItems } from './StatusDropDownItems';
import styled from '@emotion/styled';

interface SlideMenuProps {
  isOpen: boolean;
}

const StyledImg = styled.img`
  width: auto;
  height: auto;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NavHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 28px 37px 0 50px;
  width: calc(100% - 78px);
  top: 0;
`;

const NavSection = styled.section`
  ${displayCenter}
  align-items: center;
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: inherit;
  width: 90%;
`;

const NavList = styled.li`
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 30px 0 30px 27px;
  border-bottom: 1px solid var(--color-white);
`;

const NavImg = styled.img`
  margin-right: 20px;
`;

const InformationBox = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.15);
  width: 80px;
  height: 31px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size-sm);
  font-weight: 700;
  cursor: pointer;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  background: linear-gradient(#392f4f, var(--color-revolver));
  z-index: 2000;
  ${displayCenter}
  align-items: center;
`;

const MobileDropdownMenu = styled(motion.ul)<SlideMenuProps>`
  position: absolute;
  top: 110%;
  left: 0%;
  background-color: var(--color-white);
  list-style: none;
  border-radius: 10px;
  width: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

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
                {MyData?.name}
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
                      {MyData && renderDropdownItems(MyData, closeDropdown)}
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
              <NavLink to='/' onClick={close}>
                <NavList>
                  <NavImg src={Home} alt='home' />
                  <Text color='white' size='md'>
                    홈
                  </Text>
                </NavList>
              </NavLink>
              <NavLink to='/introduce' onClick={close}>
                <NavList>
                  <NavImg src={Introduce} alt='introduce' />
                  <Text color='white' size='md'>
                    동아리 소개
                  </Text>
                </NavList>
              </NavLink>
              <NavLink to='/apply' onClick={close}>
                <NavList>
                  <NavImg src={Apply} alt='apply' />
                  <Text color='white' size='md'>
                    지원하기
                  </Text>
                </NavList>
              </NavLink>
              {/* <NavLink to='/techblog' onClick={close}>
                <NavList>
                  <NavImg src={Techblog} alt='techblog' />
                  <Text color='white' size='md'>
                    테크블로그
                  </Text>
                </NavList>
              </NavLink> */}
              <NavList>
                <NavImg src={Techblog} alt='techblog' />
                <Text color='white' size='md'>
                  테크블로그
                </Text>
              </NavList>
              {/* <NavLink to='/community' onClick={close}>
                <NavList>
                  <NavImg src={Community} alt='community' />
                  <Text color='white' size='md'>
                    커뮤니티
                  </Text>
                </NavList>
              </NavLink> */}
              <NavList>
                <NavImg src={Community} alt='community' />
                <Text color='white' size='md'>
                  커뮤니티
                </Text>
              </NavList>
            </NavMenu>
          </NavSection>
        </MobileMenu>
      )}
    </AnimatePresence>
  );
};

export default NavigationSlideMobile;
