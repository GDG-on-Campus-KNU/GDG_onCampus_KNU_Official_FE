import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';

import useImageHandler from '@gdg/pages/tech_blog/hooks/useImageHandler';

import { Wrapper } from './style/MarkdownEditor.style';

export default function TechBlogEditPage(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { handleImage } = useImageHandler();

  const handleImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      const file = files[0];
      handleImage(file, (url: string) => {
        setInput((prev) => prev + `\n\n![](${url})`);
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
            setInput((prev) => prev + `\n\n![](${url})`);
          });
        }
        e.preventDefault(); // 기본 붙여넣기 방지
        break;
      }
    }
  };

  return (
    <Wrapper className='App'>
      <input
        style={{ display: 'none' }}
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        ref={fileInputRef}
      />

      <UploadButton onClick={handleImageUpload}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 24 24'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='0'
        >
          <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'></path>
        </svg>
        이미지 업로드
      </UploadButton>

      <Editor
        placeholder='내용을 입력해주세요'
        className='textarea'
        value={input}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setInput(e.target.value);
        }}
        onPaste={handlePasteImage}
      ></Editor>

      <Preview>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
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
          {input}
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
  border-right: 1px solid var(--color-silver);
  outline: none;
`;

const Preview = styled.div`
  width: 100%;
  height: 100vh;

  padding: 15px;
  box-sizing: border-box;
`;

const UploadButton = styled.button`
  background-color: #2e2e2e;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
`;
