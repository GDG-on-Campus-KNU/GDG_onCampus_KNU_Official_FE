import { Link, useParams } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import { useGetComment } from '@gdg/apis/hooks/techblog/useGetComment';
import Text from '@gdg/components/common/typography/Text';
import likes from '@gdg/assets/icon/likes.svg';
import comment from '@gdg/assets/icon/comment.svg';
import { commentDataInterface } from '@gdg/types/UserInterface';

import PostComment from './PostComment';
import Comment from './Comment';
import {
  BottomContainer,
  CountWrapper,
  CountContainer,
  CommentWrapper,
} from '../hooks/TechBlogDetailPage.style';
import { IconContainer, Icon, TrackCard } from './PostCard.style';

const CommentList = ({
  likeCount,
  commentCount,
}: {
  likeCount: number;
  commentCount: number;
}) => {
  const { id } = useParams();
  const postId = id ? parseInt(id) : null;

  const { data: comments, error, isPending } = useGetComment(postId, 0, 5);
  const pendingMessage = '댓글 정보를 불러오고 있습니다...';
  const errorMessage =
    '댓글 정보를 불러오는 도중 오류가 발생했습니다. 다시 시도해 주세요.';

  return (
    <>
      <BottomContainer>
        <CountWrapper>
          <CountContainer>
            <IconContainer $width={'20px'} $height={'17px'}>
              <Icon src={likes} alt='likes' />
            </IconContainer>
            <Text size='md' weight='bold' color='white'>
              {likeCount}
            </Text>
          </CountContainer>
          <CountContainer>
            <IconContainer $width={'20px'} $height={'17px'}>
              <Icon src={comment} alt='comment' />
            </IconContainer>
            <Text size='md' weight='bold' color='white'>
              {commentCount}
            </Text>
          </CountContainer>
        </CountWrapper>
        <Link to='/techblog'>
          <TrackCard $size='lg'>블로그 홈</TrackCard>
        </Link>
      </BottomContainer>
      <CommentWrapper>
        {isPending && <Text>{pendingMessage}</Text>}
        {error && (
          <ErrorMessage
            errors={error}
            name='commentError'
            message={errorMessage}
          ></ErrorMessage>
        )}
        {comments?.data &&
          comments.data.length > 0 &&
          comments.data.map((comment: commentDataInterface) => (
            <Comment key={comment.id} {...comment} />
          ))}
      </CommentWrapper>
      {postId !== null && <PostComment postId={postId} groupId={0} />}
    </>
  );
};

export default CommentList;
