import { motion } from 'framer-motion';

import CloseIcon from '@gdsc/assets/CloseIcon.svg';

import styled from '@emotion/styled';

export const NavMenu = styled(motion.ul)`
  width: 200px;
  height: calc(100vh - 45px);

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: var(--color-grayish);
  border-radius: 12px 0px 0px 12px;

  position: absolute;
  top: 45px;
  right: 0;
`;

export const NavItemStyle = `
  width: 140px;

  border-radius: 12px 0px 12px 12px;
  box-shadow: 0px 7px 20px 7px rgba(0,0,0,0.1);

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  padding: 15px 30px;

  font-size: var(--font-size-xl);
  color: var(--color-halti);

  position: relative;
  transition: width 0.3s ease, padding-right 0.3s ease;

  list-style: none;

  &:hover {
    padding-right: 70px;
  }
`;

export const GotoState = styled.li`
  height: 143px;
  background-color: var(--color-white);
  z-index: 3;

  ${NavItemStyle}
`;

export const GotoTeam = styled.li`
  height: 63px;
  background-color: var(--color-lavendar);
  margin-top: -20px;
  z-index: 2;

  ${NavItemStyle}
`;

export const GotoDocs = styled.li`
  height: 63px;
  background-color: var(--color-smoky);
  margin-top: -20px;
  z-index: 1;

  ${NavItemStyle}
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 26px;
  right: 26px;

  width: 18px;
  height: 18px;
  background-image: url(${CloseIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;

  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
