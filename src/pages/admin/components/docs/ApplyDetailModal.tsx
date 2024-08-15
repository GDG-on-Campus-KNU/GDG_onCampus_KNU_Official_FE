import CommonBtn from '@gdsc/components/common/button/CommonBtn';
import Text from '@gdsc/components/common/typography/Text';

import {
  ModalBackdrop,
  ModalWrapper,
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
