import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import GDGoC from '@gdg/assets/defaultLogo/GDGoC.png';

import { Header, DisplayHeader, Menu, MenuList } from '../MainNavigation.style';
import { NavImg } from '../NavLogo';

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
                <NavImg src={GDGoC} alt='logo' />
              </NavLink>
            </MenuList>
          ) : (
            <MenuList>
              <NavLink to='/'>
                <NavImg src={GDGoC} alt='logo' />
              </NavLink>
            </MenuList>
          )}
        </Menu>
      </DisplayHeader>
    </Header>
  );
};

export default AdminMainNavigation;
