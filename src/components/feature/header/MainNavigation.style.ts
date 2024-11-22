import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { displayCenter } from '@gdg/styles/LayoutStyle';

export type DropdownMenuProps = {
  isOpen: boolean;
};

export const LinkText = styled(Link)`
  margin-top: 3px;
`;

export const Header = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-navy);
  height: 45px;
  ${displayCenter}
`;

export const DisplayHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  height: 45px;
  background-color: var(--color-navy);
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 0px;
  height: calc(100% - 18px);
  background-color: var(--color-navy);
`;
export const MenuList = styled.li`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
`;

export const NavImg = styled.img`
  margin-left: 20px;
`;

export const ImgList = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const DropDownImg = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

export const DropdownMenu = styled(motion.ul)<DropdownMenuProps>`
  position: absolute;
  top: 160%;
  right: 0;

  background-color: var(--color-white);
  list-style: none;
  border-radius: 10px;
  width: 104px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

export const DropdownItem = styled.li`
  padding: 15px 10px 15px 10px;
  height: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  cursor: pointer;
  border-bottom: 1px solid var(--color-alto);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:last-child {
    border-bottom: none;
  }
`;
