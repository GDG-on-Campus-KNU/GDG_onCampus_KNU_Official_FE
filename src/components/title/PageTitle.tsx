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
  return (
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
