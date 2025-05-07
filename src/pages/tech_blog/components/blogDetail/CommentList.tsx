import { Link, useParams } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';
import { useState, useEffect, lazy } from 'react';

import { ButtonContainer } from '@gdg/pages/tech_blog/style/Comment.style';
import { useGetComment } from '@gdg/apis/hooks/techblog/useGetComment';
import Text from '@gdg/components/common/typography/Text';
import likes from '@gdg/assets/icon/likes.svg';
import comment from '@gdg/assets/icon/comment.svg';
import { commentDataInterface } from '@gdg/types/UserInterface';
import {
  BottomContainer,
  CountWrapper,
  CountContainer,
  CommentWrapper,
} from '@gdg/pages/tech_blog/style/TechBlogDetailPage.style';
import {
  IconContainer,
  Icon,
  TrackCard,
} from '@gdg/pages/tech_blog/style/PostCard.style';
const CommonBtn = lazy(() => import('@gdg/components/common/button/CommonBtn'));
const PostComment = lazy(
  () => import('@gdg/pages/tech_blog/components/blogDetail/PostComment')
);
import Comment from '@gdg/pages/tech_blog/components/blogDetail/Comment';

const CommentList = ({
  likeCount,
  commentCount,
}: {
  likeCount: number;
  commentCount: number;
}) => {
  const { id } = useParams();
  const postId = id ? parseInt(id) : null;
  const accessToken = sessionStorage.getItem('accessToken');

  const [page, setPage] = useState(0);
  const [comments, setComments] = useState<commentDataInterface[]>(() => {
    const savedComments = localStorage.getItem(`comments_${postId}`);
    return savedComments ? JSON.parse(savedComments) : [];
  });
  const [hasNext, setHasNext] = useState<boolean>(false);

  const {
    data: initialComments,
    error,
    isPending,
  } = useGetComment(postId, page, 5);

  useEffect(() => {
    if (initialComments) {
      setComments((prev) =>
        page === 0 ? initialComments.data : [...prev, ...initialComments.data]
      );
      setHasNext(initialComments.hasNext);

      localStorage.setItem(
        `comments_${postId}`,
        JSON.stringify(
          page === 0
            ? initialComments.data
            : [...comments, ...initialComments.data]
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialComments]);

  const handleNextPage = () => {
    if (hasNext) {
      setPage((prev) => prev + 1);
    }
  };

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
        {comments.map((comment: commentDataInterface) => (
          <Comment key={comment.id} {...comment} />
        ))}
        {hasNext && (
          <ButtonContainer>
            <CommonBtn
              height='43px'
              size='sm'
              color='navy'
              backgroundColor='navy'
              hoverColor='navy'
              type='button'
              onClick={handleNextPage}
            >
              다음 댓글
            </CommonBtn>
          </ButtonContainer>
        )}
      </CommentWrapper>

      {accessToken && postId !== null && (
        <PostComment
          postId={postId}
          groupId={0}
          onPostSubmit={handleNextPage}
        />
      )}
    </>
  );
};

export default CommentList;
