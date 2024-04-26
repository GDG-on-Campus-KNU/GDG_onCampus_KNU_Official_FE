import CompleteBtn from '../Button/CompleteBtn';
import SignupInput from '../Form/SignupInput';
import AuthModal from '../common/AuthModal';
import styled from '@emotion/styled';

const ButtonItem = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin: 50px 0px;
`;

const SigninModal = () => {
  return (
    <>
      <AuthModal
        title='GDSC 계정 만들기'
        text={`Google 계정을 이용하여\n GDSC KNU 계정을 만들어보세요.`}
      >
        <SignupInput placeholder='이름을 입력해주세요'>이름</SignupInput>
        <SignupInput placeholder='나이를 입력해주세요'>나이</SignupInput>
        <SignupInput placeholder='학번을 입력해주세요'>학번</SignupInput>
        <SignupInput placeholder='전공을 입력해주세요'>전공</SignupInput>
        <ButtonItem>
          <CompleteBtn color='blue'>회원가입</CompleteBtn>
        </ButtonItem>
      </AuthModal>
    </>
  );
};

export default SigninModal;
