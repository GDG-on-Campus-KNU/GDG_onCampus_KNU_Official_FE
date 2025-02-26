import { useState } from 'react';
import { useParams } from 'react-router-dom';

import enter from '@gdg/assets/icon/enter.svg';
import Text from '@gdg/components/common/typography/Text';
import { commentDataInterface } from '@gdg/types/UserInterface';

import PostComment from './PostComment';
import {
  CommentContainer,
  ProfileImg,
  InfoContainer,
  CommentContent,
  Icon,
} from '../../style/Comment.style';

const Comment = (props: commentDataInterface) => {
  const [replyVisible, setReplyVisible] = useState<boolean>(false);
  const { id } = useParams();
  const postId = id ? parseInt(id) : null;

  const date = new Date(props.createAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const formattedDate = `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;

  const handleReplyVisible = () => {
    setReplyVisible(false);
  };

  return (
    <>
      <CommentContainer>
        {props.isChild && <Icon src={enter} />}
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
        <button onClick={() => setReplyVisible(true)}>답글 달기</button>
      </CommentContainer>
      {replyVisible && (
        <PostComment
          postId={postId!}
          groupId={props.id}
          isReply={true}
          handleVisible={handleReplyVisible}
        />
      )}
    </>
  );
};

export default Comment;
