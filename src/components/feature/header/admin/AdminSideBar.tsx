import { NavLink } from 'react-router-dom';

import {
  NavMenu,
  GotoState,
  GotoTeam,
  GotoDocs,
  CloseBtn,
} from './AdminSideBar.style';
import Text from '@gdg/components/common/typography/Text';
import { useNavigationStore } from '@gdg/store/useNavigationStore';

const AdminSideBar = ({ open }: { open: boolean }) => {
  const { close } = useNavigationStore();
  return (
    <>
      {open && (
        <NavMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <NavLink to='/admin' onClick={close}>
            <GotoState>
              <CloseBtn onClick={close} />
              <Text size='xl' color='var(--color-halti)' weight='bold'>
                상태 조정
              </Text>
            </GotoState>
          </NavLink>
          <NavLink to='/admin/team' onClick={close}>
            <GotoTeam>팀 배치</GotoTeam>
          </NavLink>
          <NavLink to='/admin/document' onClick={close}>
            <GotoDocs>서류 확인</GotoDocs>
          </NavLink>
        </NavMenu>
      )}
    </>
  );
};

export default AdminSideBar;
