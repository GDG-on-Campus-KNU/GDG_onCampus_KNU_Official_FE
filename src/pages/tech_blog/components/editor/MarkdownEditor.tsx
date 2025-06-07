import { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import SyntaxHighlighter from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';

import useImageHandler from '@gdg/pages/tech_blog/hooks/useImageHandler';

import { Wrapper, Container } from '../../style/MarkdownEditor.style';
import quote from '../../../../assets/quote.svg';
import link from '../../../../assets/link.svg';
import insertImage from '../../../../assets/insertImage.svg';
import code from '../../../../assets/code.svg';

type MarkdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function MarkdownEditor({ value, onChange }: MarkdownProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleImage } = useImageHandler();

  const insertAtCursor = (text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = value.slice(0, start);
    const after = value.slice(end);

    const updated = `${before}${text}${after}`;
    onChange(updated);

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
      textarea.focus();
    }, 0);
  };

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImage(file, (url) => {
        onChange(`${value}\n\n![](${url})`);
      });
    }
  };

  const handlePasteImage = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf('image') === 0) {
        const file = item.getAsFile();
        if (file) {
          handleImage(file, (url: string) => {
            onChange(`${value}\n\n![](${url})`);
          });
        }
        e.preventDefault();
        break;
      }
    }
  };

  const handleInsertQuote = () => insertAtCursor(`\n> 인용문\n`);
  const handleInsertLink = () =>
    insertAtCursor(`[링크 텍스트](https://example.com)`);
  const handleInsertCode = () =>
    insertAtCursor(`\n\`\`\`js\n코드 작성\n\`\`\`\n`);

  return (
    <Wrapper>
      <input
        style={{ display: 'none' }}
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        ref={fileInputRef}
      />
      <Container>
        <Toolbar>
          <ToolButton onClick={handleInsertQuote}>
            <img src={quote} alt='quote' width={20} height={20} />
          </ToolButton>
          <ToolButton onClick={handleInsertLink}>
            <img src={link} alt='link' width={20} height={20} />
          </ToolButton>
          <ToolButton onClick={handleImageUpload}>
            <img src={insertImage} alt='insertImage' width={20} height={20} />
          </ToolButton>
          <ToolButton onClick={handleInsertCode}>
            <img src={code} alt='code' width={20} height={20} />
          </ToolButton>
        </Toolbar>

        <Editor
          ref={textareaRef}
          placeholder='내용을 입력해주세요'
          className='textarea'
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChange(e.target.value);
          }}
          onPaste={handlePasteImage}
        ></Editor>
      </Container>

      <Preview>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          className='markdown'
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={prism}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            blockquote({ children, ...props }) {
              return (
                <blockquote
                  style={{
                    background: '#7afca19b',
                    padding: '1px 15px',
                    borderRadius: '10px',
                  }}
                  {...props}
                >
                  {children}
                </blockquote>
              );
            },
            img({ ...props }) {
              return (
                <img
                  style={{ maxWidth: '40vw' }}
                  src={props.src?.replace('../../../../public/', '/')}
                  alt='MarkdownRenderer__Image'
                />
              );
            },
            em({ children, ...props }) {
              return (
                <span style={{ fontStyle: 'italic' }} {...props}>
                  {children}
                </span>
              );
            },
          }}
        >
          {value}
        </ReactMarkdown>
      </Preview>
    </Wrapper>
  );
}

const Editor = styled.textarea`
  width: 100%;
  height: 100vh;

  padding: 15px;
  box-sizing: border-box;

  background-color: transparent;
  color: white;

  font-size: 18px;

  border: none;
  outline: none;
`;

const Preview = styled.div`
  width: 100%;
  height: 100vh;

  padding: 15px;
  box-sizing: border-box;
`;

const Toolbar = styled.div`
  display: flex;

  gap: 10px;
  padding: 10px;

  background-color: transparent;
`;

const ToolButton = styled.button`
  background-color: transparent;

  color: var(--color-white);

  border: none;

  padding: 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
