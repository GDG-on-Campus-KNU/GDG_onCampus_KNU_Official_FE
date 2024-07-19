import { useState } from 'react';

import Text from '../typography/Text';
import styled from '@emotion/styled';

interface ITextArea {
  id: string;
  label: string;
  placeholder: string;
  maxLength: number;
  color?: string;
}

const TextAreaWrapper = styled.div`
  width: 100%;
  height: 284px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextAreaLabel = styled.label`
  font-size: var(--font-size-md);
  font-weight: bold;

  font-family: 'Noto+Sans';
`;

const TextAreaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TextAreaElement = styled.textarea<{ color?: string; hasError?: boolean }>`
  width: 100%;
  height: 100%;
  resize: none;

  padding: 12px;
  margin-top: 6px;

  border: ${(props) => (props.hasError ? '1px solid red' : 'none')};
  border-radius: 12px;
  box-sizing: border-box;

  font-size: var(--font-size-md);
  font-family: 'Noto+Sans';

  background: ${(props) => props.color || 'var(--color-que)'};
  opacity: 1;
  color: var(--color-white);

  &::placeholder {
    color: var(--color-dove);
    font-size: var(--font-size-xs);
  }

  &:focus {
    color: white;
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 7px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-abony);
    border-radius: 12px;
    border: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-dove);
    border-radius: 12px;
    border: none;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(to bottom, rgba(31, 22, 50, 0.8), transparent);
  }
`;

const CharacterCount = styled.div<{ hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;

  width: 100%;
  margin-top: 20px;

  font-size: var(--font-size-sm);
  color: ${(props) => (props.hasError ? 'red' : 'var(--color-dove)')};
  font-family: 'Noto+Sans';
`;

const TextArea: React.FC<ITextArea> = ({
  id,
  label,
  maxLength,
  placeholder,
  color,
}) => {
  const [text, setText] = useState('');

  const handleTextLength = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    if (value.length <= maxLength + 1) {
      setText(value);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const paste = event.clipboardData.getData('text');
    const textToPaste = paste.slice(0, maxLength - text.length);
    setText((prevText) => prevText + textToPaste);
  };

  return (
    <TextAreaWrapper>
      <TextAreaLabel htmlFor={id}>{label}</TextAreaLabel>
      <TextAreaContainer>
        <TextAreaElement
          id={id}
          placeholder={placeholder}
          color={color}
          value={text}
          onChange={handleTextLength}
          onPaste={handlePaste}
          hasError={text.length > maxLength}
        />
        <GradientOverlay />
      </TextAreaContainer>
      <CharacterCount hasError={text.length > maxLength}>
        {text.length > maxLength ? (
          <div>
            <Text size='lg'>🚨</Text>
            <Text size='sm' color='red' weight='bold'>
              {' '}
              500자를 초과하였습니다.
            </Text>
          </div>
        ) : (
          <div></div>
        )}
        <div>
          <Text
            size='sm'
            weight='bold'
            color={
              text.length > maxLength
                ? 'var(--color-red)'
                : 'var(--color-white)'
            }
          >
            {text.length}
          </Text>
          /{maxLength}
        </div>
      </CharacterCount>
    </TextAreaWrapper>
  );
};

export default TextArea;
