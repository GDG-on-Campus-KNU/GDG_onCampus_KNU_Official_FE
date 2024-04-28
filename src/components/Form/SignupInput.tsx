import { UseFormRegisterReturn } from 'react-hook-form';

import styled from '@emotion/styled';

interface IInput {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const InputWrapper = styled.div`
  width: 80%;

  margin: 12px 0px 3px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const InputElement = styled.input`
  width: 100%;
  height: 100%;

  padding: 12px;
  margin-top: 6px;

  border: none;
  border-radius: 50px;

  font-size: var(--font-size-md);
  font-family: 'Noto+Sans';

  background-color: var(--color-white);
  opacity: 100%;
  color: var(--color-black);
  /* border: 1px solid black; */

  &::placeholder {
    color: var(--color-dove);
    font-size: var(--font-size-xs);
  }

  &:focus {
    background-color: var(--color-french);
    outline: none;
  }
`;

const SignupInput: React.FC<IInput> = ({ id, type, placeholder, register }) => {
  return (
    <InputWrapper>
      <InputElement
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </InputWrapper>
  );
};

export default SignupInput;
