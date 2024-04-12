import styled from '@emotion/styled';

interface IInput {
  children: React.ReactNode;
  placeholder: string;
}

const InputWrapper = styled.div`
  width: 80%;

  margin: 12px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const InputLabel = styled.span`
  font-size: var(--font-size-md);
  font-weight: bold;

  font-family: 'Noto+Sans';
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
  color: var(--color-black);

  &::placeholder {
    color: var(--color-dove);
    font-size: var(--font-size-xs);
  }

  &:focus {
    background-color: var(--color-french);
    outline: none;
  }
`;

const SignupInput: React.FC<IInput> = ({ children, placeholder }) => {
  return (
    <>
      <InputWrapper>
        <InputLabel>{children}</InputLabel>
        <InputElement placeholder={placeholder} />
      </InputWrapper>
    </>
  );
};

export default SignupInput;
