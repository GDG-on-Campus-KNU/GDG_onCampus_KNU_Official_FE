import { Link } from 'react-router-dom';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

import Home from '@gdsc/assets/GDSCLogo.svg';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const ErrorMessageWrapper = styled.div`
  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 36px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
        죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.
      </Text>
      <SubMessage>
        <Text size='md' weight='normal' color='white'>
          존재하지 않는 주소를 입력하셨거나,
        </Text>
        <Text>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</Text>
      </SubMessage>
      <Link to='/'>
        <CommonBtn
          type='button'
          width='256px'
          height='47px'
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
