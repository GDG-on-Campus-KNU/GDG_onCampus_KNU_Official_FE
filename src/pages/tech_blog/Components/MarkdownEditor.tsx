import { useEffect, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Prism from 'prismjs';

import useImageHandler from '../hooks/useImageHandler';
import {
  Wrapper,
  Container,
  TitleContainer,
  NavBarContainer,
  StyledOutBtn,
  StyledPostBtn,
  StyledSaveBtn,
  Box,
} from './MarkdownEditor.style';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
//import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import 'prismjs/themes/prism.css';

interface IFormInput {
  title: string;
}

const MarkdownEditor = () => {
  const [title, setTitle] = useState<string>('');
  const { control, handleSubmit } = useForm<IFormInput>();
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

  const goBack = () => {
    window.history.back();
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Container>
        <TitleContainer placeholder='제목을 입력하세요.' />
        <Controller
          name='title'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <Editor
              height='100%'
              placeholder='내용을 입력하세요.'
              plugins={[
                colorSyntax,
                [codeSyntaxHighlight, { highlighter: Prism }],
              ]}
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
              //theme='dark'
              usageStatistics={false}
              useCommandShortcut={true}
              hooks={{
                addImageBlobHook: handleImage,
              }}
              {...field}
            />
          )}
        />
        {/* <TagsEditor /> */}
        <NavBarContainer>
          <StyledOutBtn onClick={goBack}>나가기</StyledOutBtn>
          <Box>
            <StyledSaveBtn>임시저장</StyledSaveBtn>
            <StyledPostBtn>출간하기</StyledPostBtn>
          </Box>
        </NavBarContainer>
      </Container>
    </Wrapper>
  );
};

export default MarkdownEditor;
