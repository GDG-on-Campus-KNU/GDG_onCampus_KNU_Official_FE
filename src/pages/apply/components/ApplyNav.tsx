import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import ApplyNavBox from '@gdsc/pages/apply/components/ApplyNavBox';

import {
  ApplyLayout,
  TitleLayout,
  MainTitle,
  SubTitle,
  Explain,
  SubLayout,
  InquiryText,
  InquiryLayout,
} from '@gdsc/styles/ApplyStyle';

const ApplyNav = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <ApplyLayout>
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

      <ApplyNavBox />
    </ApplyLayout>
  );
};

export default ApplyNav;
