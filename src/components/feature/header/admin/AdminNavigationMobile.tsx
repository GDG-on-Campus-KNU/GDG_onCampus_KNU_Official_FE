import MenuHamburger from '@gdg/assets/MenuHamburger.svg';
import { useNavigationStore } from '@gdg/store/useNavigationStore';

import {
  MobileHeader,
  DisplayMobileHeader,
  MobileImg,
} from '../MainNavigationMobile';
import AdminNavigationSlide from './AdminNavigationSlide';

const AdminMainNavigationMobile = () => {
  const { isOpen, open } = useNavigationStore();

  return (
    <MobileHeader>
      <DisplayMobileHeader>
        <MobileImg src={MenuHamburger} alt='menu' onClick={open} />
      </DisplayMobileHeader>
      <AdminNavigationSlide open={isOpen} />
    </MobileHeader>
  );
};

export default AdminMainNavigationMobile;
