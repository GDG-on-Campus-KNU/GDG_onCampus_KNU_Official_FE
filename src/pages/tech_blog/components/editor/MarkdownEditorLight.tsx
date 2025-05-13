import styled from '@emotion/styled';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import * as Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { useEffect, useState } from 'react';

import { EditorCommonProps } from './MarkdownEditorDark';

const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f7f9fc;

  border-radius: 7px;

  outline: none;
  border: none;
`;

const MarkdownEditorLight = ({
  editorRef,
  handleImage,
  initialContent = '',
}: EditorCommonProps) => {
  const [width, setWidth] = useState<boolean>(window.innerWidth > 860);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 860);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <Editor
        ref={editorRef}
        height='99.5%'
        placeholder='내용을 입력해주세요.'
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        previewStyle={width ? 'vertical' : 'tab'}
        initialValue={initialContent}
        initialEditType='markdown'
        hideModeSwitch={true}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
          ['scrollSync'],
        ]}
        usageStatistics={false}
        useCommandShortcut={true}
        hooks={{
          addImageBlobHook: handleImage,
        }}
      />
    </Container>
  );
};

export default MarkdownEditorLight;
