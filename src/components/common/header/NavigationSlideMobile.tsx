import { NavLink } from 'react-router-dom';

import MobileBtn from '@gdsc/components/button/MobileBtn';
import Text from '@gdsc/components/typography/Text';

import Apply from '@gdsc/assets/Apply.svg';
import Community from '@gdsc/assets/Community.svg';
import Introduce from '@gdsc/assets/Introduce.svg';
import NavSlideClose from '@gdsc/assets/NavSlideClose.svg';
import Techblog from '@gdsc/assets/Techblog.svg';

import { useNavigationStore } from '@gdsc/store/useNavigationStore';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

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

const NavigationSlideMobile = ({ open }: { open: boolean }) => {
  const { close } = useNavigationStore();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      close();
    }
  };

  return (
    <MobileMenu open={open}>
      <NavHeader>
        <NavLink to='/gdscknu/signin' onClick={close}>
          <MobileBtn
            backgroundColor='transparent'
            color='white'
            type='button'
            hoverColor='none'
          >
            로그인
          </MobileBtn>
        </NavLink>
        <CloseButton onClick={close} onKeyDown={handleKeyDown} tabIndex={0}>
          <StyledImg src={NavSlideClose} alt='close' />
        </CloseButton>
      </NavHeader>
      <NavSection>
        <NavMenu>
          <NavLink to='/gdscknu/introduce' onClick={close}>
            <NavList>
              <NavImg src={Introduce} alt='introduce' />
              <Text color='white' size='md'>
                동아리 소개
              </Text>
            </NavList>
          </NavLink>
          <NavLink to='/gdscknu/apply' onClick={close}>
            <NavList>
              <NavImg src={Apply} alt='apply' />
              <Text color='white' size='md'>
                지원하기
              </Text>
            </NavList>
          </NavLink>
          <NavLink to='/gdscknu/techblog/:tech' onClick={close}>
            <NavList>
              <NavImg src={Techblog} alt='techblog' />
              <Text color='white' size='md'>
                테크블로그
              </Text>
            </NavList>
          </NavLink>
          <NavLink to='/gdscknu/community' onClick={close}>
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
