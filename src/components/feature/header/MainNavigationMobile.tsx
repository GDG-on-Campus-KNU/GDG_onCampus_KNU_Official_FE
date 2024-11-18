import styled from '@emotion/styled';
import { lazy } from 'react';

import MenuHamburger from '@gdg/assets/MenuHamburger.svg';
import { useNavigationStore } from '@gdg/store/useNavigationStore';
import { displayCenter } from '@gdg/styles/LayoutStyle';

const NavigationSlideMobile = lazy(
  () => import('@gdg/components/feature/header/NavigationSlideMobile')
);

export const MobileHeader = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-revolver);
  height: 75px;
  ${displayCenter}
`;

export const DisplayMobileHeader = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  height: 75px;
`;

export const MobileImg = styled.img`
  margin-right: 34px;
  cursor: pointer;
`;

const MainNavigationMobile = () => {
  const { isOpen, open } = useNavigationStore();

  return (
    <MobileHeader>
      <DisplayMobileHeader>
        <MobileImg src={MenuHamburger} alt='menu' onClick={open} />
      </DisplayMobileHeader>
      <NavigationSlideMobile open={isOpen} />
    </MobileHeader>
  );
};

export default MainNavigationMobile;
