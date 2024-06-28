import { useMediaQuery } from 'react-responsive';

import ApplyNavBox from '@gdsc/pages/apply/components/ApplyNavBox';

import {
  ApplyLayout,
  TitleLayout,
  MainTitle,
  SubTitle,
  Explain,
  SubLayout,
} from '@gdsc/styles/ApplyStyle';

const ApplyNav = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <ApplyLayout>
      {isMobile ? (
        <TitleLayout>
          <SubTitle>지원하기</SubTitle>
        </TitleLayout>
      ) : (
        <TitleLayout>
          <MainTitle color=' var(--color-white)'>지원하기</MainTitle>
          <SubLayout>
            <SubTitle color=' var(--color-white)'>To Apply</SubTitle>
            <Explain>GDSC KNU</Explain>
          </SubLayout>
          <Explain>각 분야별로 선택해서 지원을 해주세요.</Explain>
        </TitleLayout>
      )}

      <ApplyNavBox />
    </ApplyLayout>
  );
};

export default ApplyNav;
