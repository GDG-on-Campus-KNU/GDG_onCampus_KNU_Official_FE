import { useMediaQuery } from 'react-responsive';

import { displayCenter } from '@gdsc/styles/LayoutStyle';

import Text from '../typography/Text';
import Title from '../typography/Title';
import styled from '@emotion/styled';

const MainTitlelayout = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 50px;
  margin-left: 60px;
`;

const MobileMainTitlelayout = styled.div`
  width: 100%;
  max-width: 1024px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;

const SubTitleLayout = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: row;
  align-items: flex-end;

  margin: 0px;
`;

const PageTitle = ({
  MainTitle,
  SubTitle,
}: {
  MainTitle: string;
  SubTitle: string;
}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return isMobile ? (
    <MobileMainTitlelayout>
      {' '}
      <Text size='xl' weight='bold'>
        {MainTitle}
      </Text>
    </MobileMainTitlelayout>
  ) : (
    <MainTitlelayout>
      <Title color='white'>{MainTitle}</Title>
      <SubTitleLayout>
        <Text size='lg' weight='bold'>
          {SubTitle}
        </Text>
        <Text>GDSC KNU</Text>
      </SubTitleLayout>
    </MainTitlelayout>
  );
};

export default PageTitle;