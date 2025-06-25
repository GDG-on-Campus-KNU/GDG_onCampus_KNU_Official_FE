import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { myTechBlogMetaDataInterface } from '@gdg/types/UserInterface';
import Text from '@gdg/components/common/typography/Text';
const CardWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UnderLine = styled.div`
  width: 100%;
  height: 1px;

  background-color: var(--color-silver);
  margin: 20px 0px;
`;

const SavesCard = (props: myTechBlogMetaDataInterface) => {
  return (
    <Link key={props.id} to={`/techblog/${props.id}`}>
      <CardWrapper>
        <Text size='sxl' weight='bold'>
          {props.title}
        </Text>
        <Text size='md'>{props.summary}</Text>
        <Text size='xs' color='white'>
          {props.createAt}
        </Text>
        <UnderLine />
      </CardWrapper>
    </Link>
  );
};

export default SavesCard;
