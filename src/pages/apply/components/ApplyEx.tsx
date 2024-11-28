import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';

import CommonBtn from '@gdg/components/common/button/CommonBtn';
import {
  // FrontendData,
  BackendData,
  AIData,
  // AndroidData,
  DesignerData,
} from '@gdg/pages/apply/components/ApplyDocs';
import ApplyQualify from '@gdg/pages/apply/components/ApplyQualify';
import PCApplyBox from '@gdg/pages/apply/components/PCApplyBox';
import {
  ApplyLayout,
  TitleLayout,
  MainTitle,
  SubTitle,
  Explain,
  SubLayout,
} from '@gdg/styles/ApplyStyle';
import { ApplyExInterface } from '@gdg/types/ApplyInterface';

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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 50px;
`;

const CommonWrapper = styled.div`
  margin-left: 20px;
  width: 50%;
`;

const ApplyEx = () => {
  const { tech = '' } = useParams();
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 767px)' });
  const navigate = useNavigate();

  // console.log(tech);

  const getData = (tech: string): ApplyExInterface | null => {
    switch (tech) {
      // case 'frontend':
      //   return FrontendData;
      case 'backend':
        return BackendData;
      case 'ai':
        return AIData;
      // case 'android':
      //   return AndroidData;
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
          <ApplyQualify data={data} />
          <ButtonWrapper>
            <CommonBtn
              color='blue'
              backgroundColor='blue'
              hoverColor='blue'
              type='button'
              width='100%'
              mWidth='50%'
              size='xl'
              mSize='sm'
              height='43px'
              padding='0'
              onClick={() => navigate(`${data.link}`)}
            >
              지원하기
            </CommonBtn>
            <CommonWrapper>
              <CommonBtn
                color='gray'
                backgroundColor='gray'
                hoverColor='blue'
                type='button'
                width='100%'
                mWidth='100%'
                height='43px'
                size='lg'
                mSize='sm'
                padding='0'
                onClick={() => navigate('/apply')}
              >
                목록으로
              </CommonBtn>
            </CommonWrapper>
          </ButtonWrapper>
        </ApplyLayout>
      ) : isTablet ? (
        <ApplyLayout>
          <TitleLayout>
            <SubLayout>
              <SubTitle color=' var(--color-white)'>To Apply</SubTitle>
              <Explain>GDG on Campus KNU</Explain>
            </SubLayout>
            <TitleWrapper>
              <MainTitle color=' var(--color-white)'>{data.korean}</MainTitle>
              <SubTitle>{data.english}</SubTitle>
              <AppEx>{data.explain}</AppEx>
            </TitleWrapper>
          </TitleLayout>
          <ApplyQualify data={data} />
          <ButtonWrapper>
            <CommonBtn
              color='blue'
              backgroundColor='blue'
              hoverColor='blue'
              type='button'
              width='100%'
              mdWidth='50%'
              mWidth='263px'
              size='xl'
              mSize='sm'
              height='43'
              padding='0'
              onClick={() => navigate(`${data.link}`)}
            >
              지원하기
            </CommonBtn>

            <CommonWrapper>
              <CommonBtn
                color='gray'
                backgroundColor='gray'
                hoverColor='blue'
                type='button'
                width='253px'
                mdWidth='100%'
                height='43px'
                size='lg'
                mSize='sm'
                padding='0'
                onClick={() => navigate('/apply')}
              >
                목록으로
              </CommonBtn>
            </CommonWrapper>
          </ButtonWrapper>
        </ApplyLayout>
      ) : (
        <FormLayout>
          <AppLayout>
            <TitleLayout>
              <SubLayout>
                <SubTitle color=' var(--color-white)'>To Apply</SubTitle>
                <Explain>GDG on Campus KNU</Explain>
              </SubLayout>
              <TitleWrapper>
                <MainTitle color=' var(--color-white)'>{data.korean}</MainTitle>
                <SubTitle>{data.english}</SubTitle>
                <AppEx>{data.explain}</AppEx>
              </TitleWrapper>
            </TitleLayout>
            <ApplyQualify data={data} />
          </AppLayout>
          <PCApplyBox data={data} />
        </FormLayout>
      )}
    </>
  );
};

export default ApplyEx;
