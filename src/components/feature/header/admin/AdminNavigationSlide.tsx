import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import Home from '@gdg/assets/Home.svg';
import NavSlideClose from '@gdg/assets/NavSlideClose.svg';
import Text from '@gdg/components/common/typography/Text';
import { useNavigationStore } from '@gdg/store/useNavigationStore';
import { displayCenter } from '@gdg/styles/LayoutStyle';

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
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  padding: 30px 50px;
  width: 100%;
  box-sizing: border-box;
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

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  background: linear-gradient(#392f4f, var(--color-revolver));
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  padding-top: 80px;
`;

const AdminNavigationSlide = ({ open }: { open: boolean }) => {
  const { close } = useNavigationStore();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      close();
    }
  };

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
            </NavMenu>
          </NavSection>
        </MobileMenu>
      )}
    </AnimatePresence>
  );
};

export default AdminNavigationSlide;
