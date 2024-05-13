import Text from '@gdsc/components/typography/Text';

import SpaceShip from '@gdsc/assets/SpaceShip.svg';

import styled from '@emotion/styled';

const ContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 60px 0px 150px;
  height: 300px;
  width: calc(100% - 210px);
  z-index: 300;
`;

const SpaceShipImg = styled.img`
  width: 70px;
  height: 68.77px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgLayout = styled(TextLayout)`
  align-items: center;
`;

const Content = () => {
  return (
    <ContentLayout>
      <TextLayout>
        <Text color='white' size='mxl' weight='300'>
          안녕하세요.
        </Text>
        <Text color='white' size='xxl' weight='700'>
          우리는 GDSC KNU 입니다!
        </Text>
      </TextLayout>
      <ImgLayout>
        <a
          href='https://sites.google.com/view/gdeveloperskorea/gdsc'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SpaceShipImg src={SpaceShip} alt='GDSC' />
        </a>
        <Text color='white' size='sm' weight='700'>
          GDSC KOREA
        </Text>
      </ImgLayout>
    </ContentLayout>
  );
};

export default Content;
