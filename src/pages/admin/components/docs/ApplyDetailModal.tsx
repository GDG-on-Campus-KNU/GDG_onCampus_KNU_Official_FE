import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

import CloseIcon from '@gdsc/assets/CloseIcon.svg';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import ApplyInfo from './ApplyInfo';
import BasicInfo from './BasicInfo';
import Memo from './Memo';
import Stars from './Stars';
import TechStack from './TechStack';
import styled from '@emotion/styled';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 85vh;
  min-width: 900px;
  min-height: 500px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;

  background-color: var(--color-alto);

  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 0 rgba(25, 5, 60, 0.25);

  position: relative;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const TitleWrapper = styled.h3`
  width: 100%;

  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseBtn = styled.button`
  width: 18px;
  height: 18px;
  background-image: url(${CloseIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;

  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 90%;
  ${displayCenter}
  gap: 15px;
`;

const IntroContainer = styled.div`
  width: 60%;
  height: 90%;

  overflow-y: auto;

  background-color: var(--color-white);

  padding: 15px 25px;
  margin-top: 10px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 0 rgba(25, 5, 60, 0.25);
`;

const ProfileContainer = styled.div`
  width: 40%;
  height: 90%;

  overflow-y: auto;

  background-color: var(--color-white);

  padding: 15px 25px;
  margin-top: 10px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px 0 rgba(25, 5, 60, 0.25);
`;

const DividingLine = styled.div`
  width: 100%;
  height: 1px;

  background-color: var(--color-dove);

  margin: 15px 0px;
`;

const SelfIntroduce = styled.div`
  width: 100%;
  height: 200px;

  overflow-y: scroll;

  color: black;
  font-size: var(--font-size-xs);
  font-weight: 200;

  margin-top: 5px;
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ApplyDetailModal = () => {
  return (
    <ModalBackdrop>
      <ModalWrapper>
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
            <BasicInfo />
            <DividingLine />
            <Text size='md' weight='bold' color='black'>
              자기소개
            </Text>
            <SelfIntroduce>
              Lorem ipsum dolor sit amet consectetur. Ipsum auctor ullamcorper
              vitae ultrices vitae ullamcorper ultrices commodo. Quam libero
              massa lacus eget dui. Pharetra amet nam pellentesque ultricies
              cras blandit lectus aliquam enim. Amet commodo sed diam sed
              volutpat netus augue. Lectus montes aliquet morbi pharetra et
              placerat fusce pellentesque. Velit mauris ipsum et elit fermentum
              turpis ornare id mi. In ultricies interdum tortor enim. Quis
              aliquam consequat fermentum aliquam venenatis. Eleifend lorem sit
              sollicitudin ac. Quam a ipsum fermentum morbi bibendum mauris est
              interdum. Sed interdum risus nulla senectus. Ac auctor viverra
              etiam sed eu amet mi. Ultricies ornare vel tortor tempor sit
              varius iaculis. Sed quis facilisis justo ac. Tincidunt urna
              posuere morbi elementum tristique utmi justo vulputate. Tellus
              quam sagittis odio sem dui nunc cursus. Pretium auctor semper
              vulputate vel dictum lorem. Purus etiam aliquam tellus est proin
              at dignissim. Enim morbi donec cras in vitae lorem porttitor
              penatibus vitae. Nulla eu orci massa feugiat. Risus blandit nec in
              volutpat justo. Sapien malesuada et quisque mi nunc. Fusce et sit
              ac consequat sapien venenatis senectus dignissim malesuada. Sit
              lorem sed at auctor. Lacus ac proin vulputate sagittis sed eget
              nisi. Vitae orci in nisl volutpat. Et pretium in nibh arcu diam
              integer diam. Ac tortor fames velit nulla mauris faucibus felis.
              Dolor viverra at dictum eget iaculis est posuere.
            </SelfIntroduce>
          </IntroContainer>
          <ProfileContainer>
            <TitleWrapper>
              <Text size='xl' weight='bold' color='black'>
                김머글
              </Text>
              <Stars color='yellow' width='25px' height='23.75px' />
            </TitleWrapper>
            <ApplyInfo />
            <DividingLine />
            <TechStack />
            <DividingLine />
            <Memo />
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
      </ModalWrapper>
    </ModalBackdrop>
  );
};

export default ApplyDetailModal;
