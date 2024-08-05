import MenuHamburger from '@gdsc/assets/MenuHamburger.svg';

import { useNavigationStore } from '@gdsc/store/useNavigationStore';

import { MobileHeader, DisplayMobileHeader, MobileImg } from './MainNavigationMobile';

const AdminMainNavigationMobile = () => {
  const { isOpen, open } = useNavigationStore();

  return (
    <MobileHeader>
      <DisplayMobileHeader>
        <MobileImg src={MenuHamburger} alt='menu' onClick={open} />
      </DisplayMobileHeader>
    </MobileHeader>
  );
};

export default AdminMainNavigationMobile;