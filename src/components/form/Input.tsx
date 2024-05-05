import styled from '@emotion/styled';

interface IInput {
  id: string;
  title: string;
  type: string;
  placeholder: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 80%;
`;

const InputTitle = styled.label`
  font-size: var(--font-size-md);

  color: var(--color-white);

  font-family: 'Noto+Sans';
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const InputElement = styled.input`
  width: 100%;
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

const Input: React.FC<IInput> = ({ id, title, type, placeholder }) => {
  return (
    <>
      <InputWrapper>
        <InputTitle htmlFor={id}>{title}</InputTitle>
        <InputContainer>
          <InputElement id={id} type={type} placeholder={placeholder} />
        </InputContainer>
      </InputWrapper>
    </>
  );
};

export default Input;
