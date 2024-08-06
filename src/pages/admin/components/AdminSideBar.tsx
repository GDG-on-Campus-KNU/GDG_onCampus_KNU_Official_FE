import { useNavigationStore } from '@gdsc/store/useNavigationStore';

const AdminSideBar = ({ open }: { open: boolean }) => {
  const { close } = useNavigationStore();
  return <>{open === true && <button onClick={close}>닫기 버튼</button>}</>;
};

export default AdminSideBar;
