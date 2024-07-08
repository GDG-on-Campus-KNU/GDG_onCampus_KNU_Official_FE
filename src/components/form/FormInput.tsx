import { UseFormRegisterReturn } from 'react-hook-form';

import styled from '@emotion/styled';

interface InputLabelInterface {
  margin: string;
  width: string;
}

interface IInput extends InputLabelInterface {
  id: string;
  type: string;
  title: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const InputWrapper = styled.div<InputLabelInterface>`
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin || '0px'};
  width: ${({ width }) => width || '100%'};
`;

const SignFormTitle = styled.label`
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: 'Noto+Sans';
  font-weight: 400;

  @media (max-width: 500px) {
    font-size: var(--font-size-sm);
  }
`;

const InputContainer = styled.div`
  width: 100%;
  margin: 5px 0px 15px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const InputElement = styled.input`
  width: calc(100% - 24px);
  height: 100%;

  padding: 12px;
  margin-top: 6px;

  border: none;
  border-radius: 12px;

  font-size: var(--font-size-md);
  font-family: 'Noto+Sans';

  background-color: #392f4f;
  opacity: 100%;
  color: var(--color-white);
  /* border: 1px solid black; */

  &::placeholder {
    color: #979ca4;
    font-size: var(--font-size-xs);
  }
`;

const FormInput = ({
  id,
  title,
  width,
  margin,
  type,
  placeholder,
  register,
}: IInput) => {
  return (
    <InputWrapper margin={margin} width={width}>
      <SignFormTitle htmlFor={id}>{title}</SignFormTitle>
      <InputContainer>
        <InputElement
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      </InputContainer>
    </InputWrapper>
  );
};

export default FormInput;
