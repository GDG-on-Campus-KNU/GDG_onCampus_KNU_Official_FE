import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import {
  FrontendData,
  BackendData,
  AIData,
  AndroidData,
  DesignerData,
} from '@gdsc/pages/apply/components/ApplyDocs';
import PCApplyBox from '@gdsc/pages/apply/components/PCApplyBox';

import {
  ApplyLayout,
  TitleLayout,
  MainTitle,
  SubTitle,
  Explain,
  SubLayout,
} from '@gdsc/styles/ApplyStyle';

import styled from '@emotion/styled';
import { ApplyExInterface } from '@gdsc/interface/ApplyInterface';

const AppLayout = styled(ApplyLayout)`
  width: 70%;
  margin-right: 108px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const AppEx = styled(Explain)`
  margin-top: 10px;
`;

const ApplyEx = () => {
  const { tech = '' } = useParams();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 767px)' });

  console.log(tech);

  const getData = (tech: string): ApplyExInterface | null => {
    switch (tech) {
      case 'frontend':
        return FrontendData;
      case 'backend':
        return BackendData;
      case 'ai':
        return AIData;
      case 'android':
        return AndroidData;
      case 'designer':
        return DesignerData;
      default:
        return null;
    }
  };

  const data: ApplyExInterface | null = getData(tech);

  // console.log(data);

  if (!data) {
    return <div>Invalid path</div>;
  }

  return (
    <>
      {isMobile ? (
        <ApplyLayout>
          <TitleLayout>
            <SubTitle>{data.korean}</SubTitle>
          </TitleLayout>
        </ApplyLayout>
      ) : isTablet ? (
        <ApplyLayout>
          <TitleLayout>
            <SubLayout>
              <SubTitle color=' var(--color-white)'>To Apply</SubTitle>
              <Explain>GDSC KNU</Explain>
            </SubLayout>
            <TitleWrapper>
              <MainTitle color=' var(--color-white)'>{data.korean}</MainTitle>
              <SubTitle>{data.english}</SubTitle>
              <AppEx>{data.explain}</AppEx>
            </TitleWrapper>
          </TitleLayout>
        </ApplyLayout>
      ) : (
        <FormLayout>
          <AppLayout>
            <TitleLayout>
              <SubLayout>
                <SubTitle color=' var(--color-white)'>To Apply</SubTitle>
                <Explain>GDSC KNU</Explain>
              </SubLayout>
              <TitleWrapper>
                <MainTitle color=' var(--color-white)'>{data.korean}</MainTitle>
                <SubTitle>Frontend Developer</SubTitle>
                <AppEx>{data.explain}</AppEx>
              </TitleWrapper>
            </TitleLayout>
          </AppLayout>
          <PCApplyBox data={data} />
        </FormLayout>
      )}
    </>
  );
};

export default ApplyEx;
