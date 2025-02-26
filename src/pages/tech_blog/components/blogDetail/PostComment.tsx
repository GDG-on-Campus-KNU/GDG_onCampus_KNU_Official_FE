import { useRef } from 'react';

import { usePostComment } from '@gdg/apis/hooks/techblog/usePostComment';

import { FormContainer, InputArea, SubmitBtn } from '../../style/Comment.style';

const PostComment = ({
  postId,
  groupId = 0,
}: {
  postId: number;
  groupId: number;
}) => {
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
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

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea placeholder='댓글을 입력하세요' ref={commentRef} required />
      <SubmitBtn type='submit'>댓글 쓰기</SubmitBtn>
    </FormContainer>
  );
};

export default PostComment;
