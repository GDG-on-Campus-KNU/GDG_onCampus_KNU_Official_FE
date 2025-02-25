import styled from '@emotion/styled';

import Text from '@gdg/components/common/typography/Text';
import { commentDataInterface } from '@gdg/types/UserInterface';

const CommentContainer = styled.div`
  width: 100%;
  min-height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;

  border-bottom: 1px solid var(--color-santas);
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  min-width: 150px;
  width: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const CommentContent = styled.div`
  width: 100%;
  min-height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Comment = (props: commentDataInterface) => {
  const date = new Date(props.createAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <CommentContainer>
      <ProfileImg src={props.profileUrl} />
      <CommentContent>
        <InfoContainer>
          <Text color='white' size='md' weight='bold'>
            {props.name}
          </Text>
          <Text color='white' size='sm'>
            {formattedDate}
          </Text>
        </InfoContainer>
        <Text color='white' size='md'>
          {props.content}
        </Text>
      </CommentContent>
    </CommentContainer>
  );
};

export default Comment;
