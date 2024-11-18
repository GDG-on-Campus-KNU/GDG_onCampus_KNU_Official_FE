import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import NavigationLogo768 from '@gdg/assets/NavigationLogo768.svg';
import NavigationLogo from '@gdg/assets/NavigationLogo.svg';

import {
  Header,
  DisplayHeader,
  Menu,
  MenuList,
  NavImg,
} from '../MainNavigation';

export type DropdownMenuProps = {
  isOpen: boolean;
};

const AdminMainNavigation = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Header>
      <DisplayHeader>
        <Menu>
          {isTablet ? (
            <MenuList>
              <NavLink to='/'>
                <NavImg src={NavigationLogo768} alt='logo' />
              </NavLink>
            </MenuList>
          ) : (
            <MenuList>
              <NavLink to='/'>
                <NavImg src={NavigationLogo} alt='logo' />
              </NavLink>
            </MenuList>
          )}
        </Menu>
      </DisplayHeader>
    </Header>
  );
};

export default AdminMainNavigation;
