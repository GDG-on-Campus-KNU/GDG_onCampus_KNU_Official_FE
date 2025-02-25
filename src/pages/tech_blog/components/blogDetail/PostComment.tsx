import { useRef } from 'react';
import styled from '@emotion/styled';

import { usePostComment } from '@gdg/apis/hooks/techblog/usePostComment';
import { displayCenter } from '@gdg/styles/LayoutStyle';

const FormContainer = styled.form`
  width: 90%;
  max-width: 724px;
  height: auto;
  min-height: 80px;

  border-radius: 12px;
  background-color: var(--color-que);

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
  margin-bottom: 40px;
  padding: 0 15px;
  gap: 10px;

  box-sizing: border-box;
`;

const InputArea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 50px;

  background-color: transparent;
  color: var(--color-white);
  font-size: var(--font-size-md);

  border: none;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  width: 10%;
  min-width: 100px;
  height: 60px;

  ${displayCenter}
  align-items: center;

  background-color: var(--color-dpurple);
  color: var(--color-white);

  font-size: var(--font-size-md);
  font-weight: 600;

  border-radius: 12px;
  border: none;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--color-deep);
    color: var(--color-silver);
  }
`;

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
