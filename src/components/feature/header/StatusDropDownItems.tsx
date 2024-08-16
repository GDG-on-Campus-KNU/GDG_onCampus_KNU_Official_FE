import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Text from '@gdsc/components/common/typography/Text';

import { DropdownItem } from './MainNavigation';
import styled from '@emotion/styled';
import { userDataInterface } from '@gdsc/types/UserInterface';

const handleLogout = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');
  sessionStorage.removeItem('user');
  window.location.href = '/';
};

const commonDropdownItems = (
  closeDropdown: () => void,
  additionalItems: React.ReactNode
) => (
  <>
    <DropdownItem onClick={closeDropdown}>
      <NavLink to='/mypage'>
        <ResponsiveText size='sm' color='black'>
          마이페이지
        </ResponsiveText>
      </NavLink>
    </DropdownItem>
    {additionalItems}
    <DropdownItem onClick={handleLogout}>
      <ResponsiveText size='sm' color='black'>
        로그아웃
      </ResponsiveText>
    </DropdownItem>
  </>
);

export const renderDropdownItems = (
  MyData: userDataInterface,
  closeDropdown: () => void
) => {
  let additionalItems;

  switch (MyData.role) {
    case 'ROLE_GUEST':
      additionalItems = null;
      break;
    case 'ROLE_MEMBER':
      additionalItems = (
        <DropdownItem onClick={closeDropdown}>
          <NavLink to='/team'>
            <ResponsiveText size='sm' color='black'>
              팀페이지
            </ResponsiveText>
          </NavLink>
        </DropdownItem>
      );
      break;
    case 'ROLE_CORE':
      additionalItems = (
        <React.Fragment>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/team'>
              <ResponsiveText size='sm' color='black'>
                팀페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
          <DropdownItem onClick={closeDropdown}>
            <NavLink to='/admin'>
              <ResponsiveText size='sm' color='black'>
                어드민페이지
              </ResponsiveText>
            </NavLink>
          </DropdownItem>
        </React.Fragment>
      );
      break;
    default:
      return null;
  }

  return commonDropdownItems(closeDropdown, additionalItems);
};

const ResponsiveText = styled(Text)`
  @media screen and (max-width: 500px) {
    font-size: var(--font-size-xs);
  }
`;
