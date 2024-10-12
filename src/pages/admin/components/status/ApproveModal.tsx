import {
  ModalBackdrop,
  ModalWrapper,
  ButtonContainer,
} from './ApproveModal.style';
import { useApproveUserList } from '@gdg/apis/hooks/admin/useApproveUser';
import CommonBtn from '@gdg/components/common/button/CommonBtn';
import Text from '@gdg/components/common/typography/Text';
import { CloseBtn } from '@gdg/components/feature/header/admin/AdminSideBar.style';
import { useSelectedUserStore } from '@gdg/store/useSelectedUserStore';

interface ApproveModalProps {
  onClose: () => void;
}

const ApproveModal = ({ onClose }: ApproveModalProps) => {
  const { selectedUsers } = useSelectedUserStore((state) => state);
  const { mutate: approveUserList, isPending } = useApproveUserList();

  const handleMemberApprove = () => {
    approveUserList(
      {
        selectedUser: selectedUsers,
        userRole: 'ROLE_MEMBER',
      },
      {
        onSuccess: () => {
          window.location.reload();
        },
        onError: (error) => {
          console.error('승인 실패:', error);
        },
      }
    );
  };

  const handleCoreApprove = () => {
    approveUserList(
      {
        selectedUser: selectedUsers,
        userRole: 'ROLE_CORE',
      },
      {
        onSuccess: () => {
          window.location.reload();
        },
        onError: (error) => {
          console.error('승인 실패:', error);
        },
      }
    );
  };

  return (
    <ModalBackdrop>
      <ModalWrapper>
        <CloseBtn onClick={onClose} />
        <Text size='lg' weight='bold' color='black'>
          승인하기
        </Text>
        <ButtonContainer>
          <CommonBtn
            type='button'
            color='blue'
            hoverColor='blue'
            backgroundColor='blue'
            width='250px'
            height='43px'
            onClick={handleMemberApprove}
          >
            <Text size='md' color='white' weight='bold'>
              {isPending ? '처리 중...' : 'Member'}
            </Text>
          </CommonBtn>
          <CommonBtn
            type='button'
            color='blue'
            hoverColor='blue'
            backgroundColor='blue'
            width='250px'
            height='43px'
            onClick={handleCoreApprove}
          >
            Core
          </CommonBtn>
        </ButtonContainer>
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default ApproveModal;
