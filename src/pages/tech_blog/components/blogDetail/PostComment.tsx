import { useRef } from 'react';

import { usePostComment } from '@gdg/apis/hooks/techblog/usePostComment';

import { FormContainer, InputArea, SubmitBtn } from '../../style/Comment.style';

const PostComment = ({
  postId,
  groupId = 0,
  isReply = false,
  handleVisible,
}: {
  postId: number;
  groupId: number;
  isReply?: boolean;
  handleVisible?: () => void;
}) => {
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const replyRef = useRef<HTMLTextAreaElement | null>(null);
  const { mutate: postComment } = usePostComment(postId);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const commentText = commentRef.current?.value;

    if (commentText) {
      const commentData = {
        groupId: groupId,
        content: commentText,
      };

      postComment(commentData);

      if (commentRef.current) {
        commentRef.current.value = '';
      }
    }
  };

  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const replyText = replyRef.current?.value;

    if (replyText) {
      const replyData = {
        groupId: groupId,
        content: replyText,
      };

      postComment(replyData, {
        onSuccess: () => {
          if (handleVisible) handleVisible();
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
