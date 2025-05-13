import styled from '@emotion/styled';

import { displayCenter } from '@gdg/styles/LayoutStyle';

export const FormContainer = styled.form`
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

export const InputArea = styled.textarea`
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

export const SubmitBtn = styled.button`
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

export const CommentContainer = styled.div`
  width: 100%;
  min-height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;

  border-bottom: 1px solid var(--color-santas);
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  min-width: 150px;
  width: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const CommentContent = styled.div`
  width: 100%;
  min-height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  width: auto;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  margin-top: 20px;
  gap: 10px;
`;

export const ReplyButton = styled.button`
  width: 50px;

  color: white;
  background-color: transparent;

  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: var(--color-silver);
  }
`;
