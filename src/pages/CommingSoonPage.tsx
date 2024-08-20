import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

import Home from '@gdsc/assets/GDSCLogo.svg';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

const ErrorMessageWrapper = styled.div`
  ${displayCenter}
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 36px;
  height: 100vh;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const SubMessage = styled.div`
  ${displayCenter}
  flex-direction: column;
  align-items: center;
`;

const CommingSoonPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <ErrorMessageWrapper>
      <img src={Home} alt='home' />
      <Text size='xxl' weight='bold' color='white'>
        Comming Soon
      </Text>
      <Text size='xl' weight='bold' color='white'>
        죄송합니다.
        <br /> 현재 개발 중인 페이지입니다.
      </Text>
      <SubMessage>
        <Text size='md' weight='normal' color='white'>
          빠른 시일내에 <br />
          사용자 분들께 더 좋은 서비스를 제공할 수 있도록 노력하겠습니다.
          <br />
          감사합니다.
        </Text>
      </SubMessage>
      {isMobile && (
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
      )}
    </ErrorMessageWrapper>
  );
};

export default CommingSoonPage;
