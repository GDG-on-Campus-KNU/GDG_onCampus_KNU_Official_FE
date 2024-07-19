import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';

import MobileBtn from '@gdsc/components/common/button/MobileBtn';
import Text from '@gdsc/components/common/typography/Text';
import {
  DropDownImg,
  DropdownMenuProps,
} from '@gdsc/components/feature/header/MainNavigation';

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

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import { renderDropdownItems } from './StatusDropDownItems';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }

`;

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
`;

const NavigationSlideMobile = ({ open }: { open: boolean }) => {
  const { close } = useNavigationStore();
  const accessToken = localStorage.getItem('accessToken'); // 상태관리를 통해서 액세스 토큰 가져올 계획입니다. 수정해야됩니다.
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

  const { data: MyData } = useGetMyData();

  return (
    <MobileMenu open={open}>
      <NavHeader>
        {accessToken ? (
          <InformationBox>
            {MyData?.name}
            {dropdownOpen ? (
              <DropDownImg
                src={HdDropUp}
                alt='dropdown'
                onClick={toggleDropdown}
              />
            ) : (
              <DropDownImg
                src={HdDropDown}
                alt='dropdown'
                onClick={toggleDropdown}
              />
            )}
            <MobileDropdownMenu
              isOpen={dropdownOpen}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: dropdownOpen ? 1 : 0,
                y: dropdownOpen ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
            >
              {MyData && renderDropdownItems(MyData, closeDropdown)}
            </MobileDropdownMenu>
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
          <NavLink to='/techblog' onClick={close}>
            <NavList>
              <NavImg src={Techblog} alt='techblog' />
              <Text color='white' size='md'>
                테크블로그
              </Text>
            </NavList>
          </NavLink>
          <NavLink to='/community' onClick={close}>
            <NavList>
              <NavImg src={Community} alt='community' />
              <Text color='white' size='md'>
                커뮤니티
              </Text>
            </NavList>
          </NavLink>
        </NavMenu>
      </NavSection>
    </MobileMenu>
  );
};

export default NavigationSlideMobile;

const MobileDropdownMenu = styled(motion.ul)<DropdownMenuProps>`
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

const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  background: linear-gradient(#392f4f, var(--color-revolver));
  transition: transform 0.3s ease-in-out;
  z-index: 2000;
  transform: translateX(100%);
  ${displayCenter}
  align-items: center;
  ${(props) =>
    props.open
      ? css`
          animation: ${slideIn} 0.5s forwards;
        `
      : css`
          animation: ${slideOut} 0.5s forwards;
        `}
`;
