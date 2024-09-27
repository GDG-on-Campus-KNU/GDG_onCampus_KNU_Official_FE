import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import Text from '@gdg/components/common/typography/Text';
import {
  ApplyLayout,
  TitleLayout,
  MainTitle,
  SubTitle,
  Explain,
  SubLayout,
  InquiryLayout,
  InquiryText,
} from '@gdg/styles/ApplyStyle';

const ApplyLayoutEnd = styled(ApplyLayout)`
  height: calc(100vh - 95px);
`;

const TextBox = styled.div`
  width: 100%;
  height: calc(100% - 106px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ApplyNavEnd = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <ApplyLayoutEnd>
      {isMobile ? (
        <>
          <TitleLayout>
            <SubTitle>지원하기</SubTitle>
          </TitleLayout>
          <InquiryLayout>
            <Explain>이미 지원했다면?</Explain>
            <Link to='/apply/inquiry'>
              <InquiryText>지원서 조회하기</InquiryText>
            </Link>
          </InquiryLayout>
        </>
      ) : (
        <TitleLayout>
          <MainTitle color=' var(--color-white)'>지원하기</MainTitle>
          <SubLayout>
            <SubTitle color=' var(--color-white)'>To Apply</SubTitle>
            <Explain>GDG on Campus KNU</Explain>
          </SubLayout>
          <Explain>각 분야별로 선택해서 지원을 해주세요.</Explain>
          <InquiryLayout>
            <Explain>이미 지원했다면?</Explain>
            <Link to='/apply/inquiry'>
              <InquiryText>지원서 조회하기</InquiryText>
            </Link>
          </InquiryLayout>
        </TitleLayout>
      )}
      <TextBox>
        <Text color='white' weight='700' size='xxl'>
          지원가능한 공고가 없습니다
        </Text>
      </TextBox>
    </ApplyLayoutEnd>
  );
};

export default ApplyNavEnd;
