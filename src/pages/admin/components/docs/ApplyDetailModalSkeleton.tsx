import styled from '@emotion/styled';

import CommonBtn from '@gdg/components/common/button/CommonBtn';
import Text from '@gdg/components/common/typography/Text';

import {
  TitleWrapper,
  CloseBtn,
  ContentWrapper,
  IntroContainer,
  ProfileContainer,
  DividingLine,
  SelfIntroduce,
  ButtonContainer,
} from './ApplyDetailModal.style';
import ApplyInfo from './ApplyInfo';
import BasicInfo from './BasicInfo';
import Memo from './Memo';
import Stars from './Stars';
import TechStack from './TechStack';

const MarkBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameBox = styled.div`
  width: 67px;
  height: 30px;

  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 12px;
`;

const ApplyDetailModalSkeleton = () => {
  return (
    <>
      <TitleWrapper>
        <Text size='xl' weight='bold' color='black'>
          지원자 정보 조회
        </Text>
        <CloseBtn />
      </TitleWrapper>
      <ContentWrapper>
        <IntroContainer>
          <Text size='md' weight='bold' color='black'>
            기본정보
          </Text>
          <BasicInfo
            name=' '
            studentNumber=' '
            major=' '
            phoneNumber=' '
            email=' '
          />
          <DividingLine />
          <Text size='md' weight='bold' color='black'>
            자기소개
          </Text>
          <SelfIntroduce></SelfIntroduce>
        </IntroContainer>
        <ProfileContainer>
          <TitleWrapper>
            <NameBox />
            <MarkBtn>
              <Stars color='silver' width='25px' height='24px' />
            </MarkBtn>
          </TitleWrapper>
          <ApplyInfo track='' submittedAt='' />
          <DividingLine />
          <TechStack techStack='  ,  ,  ' link='' />
          <DividingLine />
          <Memo id={null} note='' />
          <DividingLine />
          <ButtonContainer>
            <CommonBtn
              type='button'
              width='45%'
              height='30px'
              color='yellow'
              hoverColor='yellow'
              backgroundColor='yellow'
            >
              합격
            </CommonBtn>
            <CommonBtn
              type='button'
              width='45%'
              height='30px'
              color='innerYellow'
              hoverColor='innerYellow'
              backgroundColor='innerYellow'
            >
              불합격
            </CommonBtn>
          </ButtonContainer>
        </ProfileContainer>
      </ContentWrapper>
    </>
  );
};

export default ApplyDetailModalSkeleton;
