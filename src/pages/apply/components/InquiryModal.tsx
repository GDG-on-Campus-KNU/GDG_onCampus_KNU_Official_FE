import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';

import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Input from '@gdsc/components/common/form/Input';
import Text from '@gdsc/components/common/typography/Text';

import ApplySaveForm from '@gdsc/pages/apply/components/ApplySaveForm';

import { ApplyInquiryQuery } from '@gdsc/apis/hooks/apply/ApplyInquiryQuery';

import { AuthWrapper, AuthForm } from '@gdsc/styles/AuthModalStyle';
import { displayCenter, DisplayLayout } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';
import { useQueryClient } from '@tanstack/react-query';

const TitleContainer = styled.h2`
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }

  margin: 0px;

  ${displayCenter}
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-white);
`;

const ContentContainer = styled.div`
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }

  ${displayCenter}
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }

  gap: 20px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }

  ${displayCenter}
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

const InquiryModal = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');

  const { data, isLoading, isFetching, refetch } = ApplyInquiryQuery(
    name,
    studentNumber
  );

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['getApplyData'] });
  }, [queryClient]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const currentDate = dayjs();
    const cutoffDate = dayjs('2024-09-06');

    if (currentDate.isAfter(cutoffDate)) {
      alert('조회 기간이 지났습니다. 09월 05일 이후로는 조회가 불가능합니다.');
      return;
    }

    refetch();
  };

  return (
    <>
      {data === undefined ? (
        <AuthWrapper>
          <AuthForm color='navy' onSubmit={handleSubmit}>
            <TitleContainer>
              {isMobile ? (
                <Text size='lg' color='white' weight='bold' whiteSpace='normal'>
                  기본정보 <span style={{ color: 'red' }}>*</span>
                </Text>
              ) : (
                <Text size='xl' color='white' weight='bold' whiteSpace='normal'>
                  기본정보 <span style={{ color: 'red' }}>*</span>
                </Text>
              )}
              <Line />
              <Text size='sm' color='white'>
                온라인 지원서류에 입력한 이름과 학번으로 지원서 조회가 가능해요!
                각 항목을 정확히 기입해주세요.
              </Text>
            </TitleContainer>
            <ContentContainer>
              <Input
                id='name'
                label='이름'
                placeholder='ex) 홍길동'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                id='studentNumber'
                label='학번'
                placeholder='ex) 2024111222'
                type='text'
                value={studentNumber}
                onChange={(e) => setStudentNumber(e.target.value)}
              />
            </ContentContainer>
            <ButtonContainer>
              {isLoading || isFetching ? (
                <CommonBtn
                  color='blue'
                  backgroundColor='blue'
                  hoverColor='blue'
                  size='lg'
                  width='100%'
                  height='auto'
                  padding='5px'
                  mdWidth='100%'
                  mWidth='100%'
                  mHeight='30px'
                  type='submit'
                >
                  <Oval
                    visible={true}
                    height='30'
                    width='30'
                    color='#fff'
                    ariaLabel='oval-loading'
                    wrapperStyle={{}}
                    wrapperClass=''
                  />
                </CommonBtn>
              ) : (
                <CommonBtn
                  color='blue'
                  backgroundColor='blue'
                  hoverColor='blue'
                  size='lg'
                  width='100%'
                  height='auto'
                  padding='5px'
                  mdWidth='100%'
                  mWidth='100%'
                  mHeight='30px'
                  type='submit'
                >
                  조회하기
                </CommonBtn>
              )}

              <CommonBtn
                color='gray'
                backgroundColor='gray'
                hoverColor='navy'
                size='lg'
                width='100%'
                height='auto'
                padding='5px'
                mdWidth='100%'
                mWidth='100%'
                mHeight='30px'
                type='button'
                onClick={() => navigate('/apply')}
              >
                돌아가기
              </CommonBtn>
            </ButtonContainer>
          </AuthForm>
        </AuthWrapper>
      ) : (
        <DisplayLayout>
          <ApplySaveForm SaveData={data} />
        </DisplayLayout>
      )}
    </>
  );
};

export default InquiryModal;
