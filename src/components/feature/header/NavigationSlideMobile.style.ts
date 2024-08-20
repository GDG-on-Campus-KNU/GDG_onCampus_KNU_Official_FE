import { motion } from 'framer-motion';

import Text from '@gdsc/components/common/typography/Text';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

export const StyledImg = styled.img`
  width: auto;
  height: auto;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NavHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 28px 37px 0 50px;
  width: calc(100% - 78px);
  top: 0;
`;

export const NavSection = styled.section`
  ${displayCenter}
  align-items: center;
  width: 100%;
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: inherit;
  width: 90%;
`;

export const NavList = styled.li`
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 30px 0 30px 27px;
  border-bottom: 1px solid var(--color-white);
`;

export const NavImg = styled.img`
  margin-right: 20px;
`;

export const InformationBox = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.15);
  width: 100px;
  height: 31px;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameText = styled(Text)`
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MobileMenu = styled(motion.div)`
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

export const MobileDropdownMenu = styled(motion.ul)<{ isOpen: boolean }>`
  position: absolute;
  top: 110%;
  left: 0%;
  background-color: var(--color-white);
  list-style: none;
  border-radius: 10px;
  width: 108px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;
