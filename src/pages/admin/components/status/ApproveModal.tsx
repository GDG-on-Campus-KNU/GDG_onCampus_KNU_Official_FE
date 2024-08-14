import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';
import { CloseBtn } from '@gdsc/components/feature/header/admin/AdminSideBar.style';

import {
  ModalBackdrop,
  ModalWrapper,
  ButtonContainer,
} from './ApproveModal.style';

interface ApproveModalProps {
  onClose: () => void;
}

const ApproveModal = ({ onClose }: ApproveModalProps) => {
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
          >
            <Text size='md' color='white' weight='bold'>
              Member
            </Text>
          </CommonBtn>
          <CommonBtn
            type='button'
            color='blue'
            hoverColor='blue'
            backgroundColor='blue'
            width='250px'
            height='43px'
          >
            Core
          </CommonBtn>
        </ButtonContainer>
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default ApproveModal;
