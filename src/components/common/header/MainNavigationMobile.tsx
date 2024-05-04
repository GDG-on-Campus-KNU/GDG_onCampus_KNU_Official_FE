import MenuHamburger from '@gdsc/assets/MenuHamburger.svg';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const MobileHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-halti);
  height: 75px;
  ${displayCenter}
`;

const DisplayMobileHeader = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  height: 75px;
`;

const MobileImg = styled.img`
  margin-right: 32px;
  cursor: pointer;
`;

const MainNavigationMobile = () => {
  return (
    <MobileHeader>
      <DisplayMobileHeader>
        <MobileImg src={MenuHamburger} alt='menu' />
      </DisplayMobileHeader>
    </MobileHeader>
  );
};

export default MainNavigationMobile;
