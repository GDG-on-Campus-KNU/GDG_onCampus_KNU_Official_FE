import styled from '@emotion/styled';

interface IInput {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const InputWrapper = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const InputLabel = styled.label`
  font-size: var(--font-size-lg);
  font-weight: bold;

  font-family: 'Noto+Sans';
`;

const InputElement = styled.input`
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  padding: 12px;
  margin-top: 6px;

  border: none;
  border-radius: 12px;

  font-size: var(--font-size-md);
  font-family: 'Noto+Sans';

  background-color: var(--color-que);
  opacity: 100%;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-dove);
    font-size: var(--font-size-xs);
  }

  &:focus {
    color: var(--color-white);
    outline: none;
  }
`;

const Input: React.FC<IInput> = ({ id, label, type, placeholder }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputElement id={id} type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Input;
