import { ModalWrapper, ButtonContainer } from './DeleteModal.style';
import { useDeleteUserList } from '@gdg/apis/hooks/admin/status/useDeleteUser';
import trashcanIcon from '@gdg/assets/admin/trashcanIcon.svg';
import CommonBtn from '@gdg/components/common/button/CommonBtn';
import Text from '@gdg/components/common/typography/Text';
import { CloseBtn } from '@gdg/components/feature/header/admin/AdminSideBar.style';
import { useSelectedUserStore } from '@gdg/store/useSelectedUserStore';

interface DeleteModalProps {
  onClose: () => void;
}

const DeleteModal = ({ onClose }: DeleteModalProps) => {
  const { selectedUsers } = useSelectedUserStore((state) => state);
  const { mutate: deleteUserList, isPending } = useDeleteUserList();

  const handleDeleteClick = async () => {
    if (selectedUsers.length === 0) {
      alert('삭제할 사용자가 선택되지 않았습니다.');
      return;
    }

    try {
      await deleteUserList(selectedUsers);
      alert('사용자가 성공적으로 삭제되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('사용자 삭제에 실패했습니다');
    } finally {
      onClose();
    }
  };
  return (
    <ModalWrapper>
      <CloseBtn onClick={onClose} />
      <Text size='lg' weight='bold' color='black'>
        정말 삭제하시겠습니까?
      </Text>
      <Text size='md' weight='normal' color='black'>
        이 작업은 되돌릴 수 없습니다. 정말 삭제하시겠습니까?
      </Text>
      <ButtonContainer>
        <CommonBtn
          type='button'
          color='red'
          hoverColor='red'
          backgroundColor='red'
          width='250px'
          height='43px'
          onClick={handleDeleteClick}
          disabled={isPending}
        >
          <img src={trashcanIcon} alt='delete' />
          <Text size='md' color='white' weight='bold'>
            삭제하기
          </Text>
        </CommonBtn>
        <CommonBtn
          type='button'
          color='gray'
          hoverColor='gray'
          backgroundColor='gray'
          width='250px'
          height='43px'
          onClick={onClose}
        >
          취소하기
        </CommonBtn>
      </ButtonContainer>
    </ModalWrapper>
  );
};

export default DeleteModal;
