import { useEffect, useState } from 'react';

import Prism from 'prismjs';

import useImageHandler from '../hooks/useImageHandler';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'prismjs/themes/prism.css';

const MarkdownEditorDark = () => {
  const [width, setWidth] = useState<boolean>(window.innerWidth > 860);
  const { handleImage } = useImageHandler();

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
    <Editor
      height='100%'
      placeholder='내용을 입력하세요.'
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      previewStyle={width ? 'vertical' : 'tab'}
      initialEditType='markdown'
      hideModeSwitch={true}
      toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
      ]}
      theme='dark'
      usageStatistics={false}
      useCommandShortcut={true}
      hooks={{
        addImageBlobHook: handleImage,
      }}
    />
  );
};

export default MarkdownEditorDark;
