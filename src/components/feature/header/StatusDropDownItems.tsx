import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Text from '@gdsc/components/common/typography/Text';

import { DropdownItem } from './MainNavigation';
import styled from '@emotion/styled';
import { userDataInterface } from '@gdsc/types/UserInterface';

const handleLogout = () => {
  localStorage.removeItem('accessToken');
  window.location.href = '/';
};

export const renderDropdownItems = (
  MyData: userDataInterface,
  closeDropdown: () => void
) => {
  switch (MyData.role) {
    case 'ROLE_GUEST':
      return (
        <React.Fragment>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/mypage'>
              <ResponsiveText size='sm' color='black'>
                마이페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={handleLogout}>
            <ResponsiveText size='sm' color='black'>
              로그아웃
            </ResponsiveText>
          </DropdownItem>
        </React.Fragment>
      );
    case 'ROLE_MEMBER':
      return (
        <>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/mypage'>
              <ResponsiveText size='sm' color='black'>
                마이페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/team'>
              <ResponsiveText size='sm' color='black'>
                팀페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={handleLogout}>
            <ResponsiveText size='sm' color='black'>
              로그아웃
            </ResponsiveText>
          </DropdownItem>
        </>
      );
    case 'ROLE_CORE':
      return (
        <>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/mypage'>
              <ResponsiveText size='sm' color='black'>
                마이페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/team'>
              <Text size='sm' color='black'>
                팀페이지
              </Text>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/admin'>
              <ResponsiveText size='sm' color='black'>
                어드민페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={handleLogout}>
            <ResponsiveText size='sm' color='black'>
              로그아웃
            </ResponsiveText>
          </DropdownItem>
        </>
      );
    default:
      return null;
  }
};

const ResponsiveText = styled(Text)`
  @media screen and (max-width: 500px) {
    font-size: var(--font-size-xs);
  }
`;
