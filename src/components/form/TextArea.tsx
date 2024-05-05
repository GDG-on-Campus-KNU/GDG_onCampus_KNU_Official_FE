import styled from '@emotion/styled';

interface ITextArea {
  id: string;
  title: string;
  placeholder: string;
}

const TextAreaWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TextAreaTitle = styled.label`
  font-size: var(--font-size-md);

  color: var(--color-white);

  font-family: 'Noto+Sans';
`;

const TextAreaContainer = styled.div`
  width: 90%;

  margin-top: 5px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TextAreaElement = styled.textarea`
  width: 100%;
  height: 250px;

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

const TextArea: React.FC<ITextArea> = ({ id, title, placeholder }) => {
  return (
    <>
      <TextAreaWrapper>
        <TextAreaTitle htmlFor={id}>{title}</TextAreaTitle>
        <TextAreaContainer>
          <TextAreaElement id={id} placeholder={placeholder} />
        </TextAreaContainer>
      </TextAreaWrapper>
    </>
  );
};

export default TextArea;
