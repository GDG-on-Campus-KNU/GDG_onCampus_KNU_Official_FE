import { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';

import useImageHandler from '@gdg/pages/tech_blog/hooks/useImageHandler';

import { Wrapper } from './style/MarkdownEditor.style';
export default function TechBlogEditPage(): JSX.Element {
  const [input, setInput] = useState<string>('');
  const { handleImage } = useImageHandler();

  const insertImageMarkdown = useCallback((url: string) => {
    const markdown = `![이미지 설명](${url})\n`;
    setInput((prev) => prev + '\n' + markdown);
  }, []);

  const handlePaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          await handleImage(file, insertImageMarkdown);
          e.preventDefault();
          return;
        }
      }
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    for (const file of files) {
      if (file.type.startsWith('image/')) {
        await handleImage(file, insertImageMarkdown);
      }
    }
  };

  return (
    <Wrapper className='App'>
      <Editor
        placeholder='입력해주세요'
        className='textarea'
        value={input}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setInput(e.target.value);
        }}
        onPaste={handlePaste}
        onDrop={handleDrop}
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
