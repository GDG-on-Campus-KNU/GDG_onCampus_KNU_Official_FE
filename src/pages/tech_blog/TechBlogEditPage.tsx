import { useState } from 'react';

import CommonBtn from '@gdg/components/common/button/CommonBtn';

import MarkdownEditor from './Components/MarkdownEditor';
import TechBlogTitle from './Components/TechBlogTitle';
import styled from '@emotion/styled';

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  width: 218px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  justify-self: flex-end;
  margin-right: 63px;
`;

const TechBlogEditPage = () => {
  const [value, setValue] = useState<string | undefined>('');
  return (
    <>
      <MarkdownEditor />
    </>
  );
};

export default TechBlogEditPage;
