import { useRef } from 'react';

import { usePostComment } from '@gdg/apis/hooks/techblog/usePostComment';
import { commentDataInterface } from '@gdg/types/UserInterface';

import { FormContainer, InputArea, SubmitBtn } from '../../style/Comment.style';

interface PostCommentProps {
  postId: number;
  groupId?: number;
  isReply?: boolean;
  onPostSubmit?: (newComment: commentDataInterface) => void;
  handleVisible?: () => void;
}

const PostComment = ({
  postId,
  groupId = 0,
  isReply = false,
  onPostSubmit,
  handleVisible,
}: PostCommentProps) => {
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const replyRef = useRef<HTMLTextAreaElement | null>(null);
  const { mutate: postComment } = usePostComment(postId);

  const accessToken = sessionStorage.getItem('accessToken');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const commentText = commentRef.current?.value;

    if (!accessToken) {
      alert('로그인이 필요한 기능입니다.');
      return;
    }

    if (commentText) {
      const commentData = {
        groupId: groupId,
        content: commentText,
      };

      postComment(commentData, {
        onSuccess: (newComment) => {
          handleVisible?.();
          onPostSubmit?.(newComment);
        },
      });

      if (commentRef.current) {
        commentRef.current.value = '';
      }
    }
  };

  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const replyText = replyRef.current?.value;

    if (!accessToken) {
      alert('로그인이 필요한 기능입니다.');
      return;
    }

    if (replyText) {
      const replyData = {
        groupId: groupId,
        content: replyText,
      };

      postComment(replyData, {
        onSuccess: (newComment) => {
          handleVisible?.();
          onPostSubmit?.(newComment);
        },
      });

      if (replyRef.current) {
        replyRef.current.value = '';
      }
    }
  };

  return (
    <>
      {!isReply && (
        <FormContainer onSubmit={handleSubmit}>
          <InputArea
            placeholder='댓글을 입력하세요'
            ref={commentRef}
            required
          />
          <SubmitBtn type='submit'>댓글 쓰기</SubmitBtn>
        </FormContainer>
      )}
      {isReply && (
        <FormContainer onSubmit={handleReplySubmit}>
          <InputArea placeholder='답글을 입력하세요' ref={replyRef} required />
          <SubmitBtn type='submit'>답글 쓰기</SubmitBtn>
        </FormContainer>
      )}
    </>
  );
};

export default PostComment;
