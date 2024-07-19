import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';

import Text from '@gdsc/components/common/typography/Text';

import HdDropDown from '@gdsc/assets/HdDropDown.svg';
import HdDropUp from '@gdsc/assets/HdDropUp.svg';
import NavigationLogo768 from '@gdsc/assets/NavigationLogo768.svg';
import NavigationLogo from '@gdsc/assets/NavigationLogo.svg';

import { useGetMyData } from '@gdsc/apis/hooks/mypage/useGetMyData';

import { useHeaderDropDownState } from '@gdsc/store/useHeaderDropDownStore';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import { renderDropdownItems } from './StatusDropDownItems';
import styled from '@emotion/styled';

const Header = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-navy);
  height: 45px;
  ${displayCenter}
`;

const DisplayHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  height: 45px;
  background-color: var(--color-navy);
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  background-color: var(--color-navy);
`;
const MenuList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;

const NavImg = styled.img`
  margin-left: 20px;
`;

const ImgList = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

export type DropdownMenuProps = {
  isOpen: boolean;
};

const MainNavigation = () => {
  const accessToken = localStorage.getItem('accessToken'); // 상태관리를 통해서 액세스 토큰 가져올 계획입니다. 수정해야됩니다.
  const isTablet = useMediaQuery({ query: '(max-width: 767px)' });

  const dropdownOpen = useHeaderDropDownState((state) => state.dropdownOpen);
  const toggleDropdown = useHeaderDropDownState(
    (state) => state.toggleDropdown
  );
  const closeDropdown = useHeaderDropDownState((state) => state.closeDropdown);

  const { data: MyData } = useGetMyData();

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
          <MenuList>
            <NavLink to='/introduce'>
              <Text color='white'>동아리 소개</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/apply'>
              <Text color='white'>지원하기</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/techblog'>
              <Text color='white'>테크블로그</Text>
            </NavLink>
          </MenuList>
          <MenuList>
            <NavLink to='/community'>
              <Text color='white'>커뮤니티</Text>
            </NavLink>
          </MenuList>
        </Menu>
        {accessToken ? (
          <Menu>
            <MenuList>
              <ImgList src={MyData?.profileUrl} alt='profile' />
              <div>
                <Text color='white'>{MyData?.name}</Text>
              </div>
              {dropdownOpen ? (
                <DropDownImg
                  src={HdDropUp}
                  alt='dropdown'
                  onClick={toggleDropdown}
                />
              ) : (
                <DropDownImg
                  src={HdDropDown}
                  alt='dropdown'
                  onClick={toggleDropdown}
                />
              )}

              <DropdownMenu
                isOpen={dropdownOpen}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: dropdownOpen ? 1 : 0,
                  y: dropdownOpen ? 0 : -10,
                }}
                transition={{ duration: 0.3 }}
              >
                {MyData && renderDropdownItems(MyData, closeDropdown)}
              </DropdownMenu>
            </MenuList>
          </Menu>
        ) : (
          <Menu>
            <MenuList>
              <NavLink to='/signin'>
                <Text color='white'>로그인</Text>
              </NavLink>
            </MenuList>
          </Menu>
        )}
      </DisplayHeader>
    </Header>
  );
};

export default MainNavigation;

export const DropDownImg = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

const DropdownMenu = styled(motion.ul)<DropdownMenuProps>`
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
