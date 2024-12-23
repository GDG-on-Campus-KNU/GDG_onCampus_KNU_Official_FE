import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';

import { displayCenter } from '@gdg/styles/LayoutStyle';

import Text from '../typography/Text';
import Title from '../typography/Title';

const MainTitlelayout = styled.div`
  width: 100%;
  max-width: 1024px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
        <Text>GDG on Campus KNU</Text>
      </SubTitleLayout>
    </MainTitlelayout>
  );
};

export default PageTitle;
