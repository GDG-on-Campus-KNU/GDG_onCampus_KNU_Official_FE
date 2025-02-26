import Text from '@gdg/components/common/typography/Text';
import { commentDataInterface } from '@gdg/types/UserInterface';

import {
  CommentContainer,
  ProfileImg,
  InfoContainer,
  CommentContent,
} from '../../style/Comment.style';

const Comment = (props: commentDataInterface) => {
  const date = new Date(props.createAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;

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
