import styled from '@emotion/styled';
import Home from '@gdg/assets/GDSCLogo.svg';
import CommonBtn from '@gdg/components/common/button/CommonBtn';
import Text from '@gdg/components/common/typography/Text';
import { displayCenter } from '@gdg/styles/LayoutStyle';
import { Link } from 'react-router-dom';

const ErrorMessageWrapper = styled.div`
  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 36px;
  height: 100vh;

  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const SubMessage = styled.div`
  ${displayCenter}
  flex-direction: column;
  align-items: center;
`;

const ErrorPage = () => {
  return (
    <ErrorMessageWrapper>
      <img src={Home} alt='home' />
      <Text size='xxl' weight='bold' color='white'>
        404 NOT FOUND
      </Text>
      <Text size='xl' weight='bold' color='white'>
        죄송합니다. 현재 찾을 수 없는
        <br /> 페이지를 요청하셨습니다.
      </Text>
      <SubMessage>
        <Text size='md' weight='normal' color='white'>
          존재하지 않는 주소를 입력하셨거나, <br />
          요청하신 페이지의 주소가
          <br />
          변경, 삭제되어 찾을 수 없습니다.
        </Text>
      </SubMessage>
      <Link to='/'>
        <CommonBtn
          type='button'
          width='256px'
          height='47px'
          mdWidth='256px'
          mdHeight='47px'
          mWidth='256px'
          mHeight='47px'
          color='blue'
          hoverColor='blue'
          backgroundColor='blue'
        >
          홈으로
        </CommonBtn>
      </Link>
    </ErrorMessageWrapper>
  );
};

export default ErrorPage;
