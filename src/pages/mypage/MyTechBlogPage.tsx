// import { TeamBlogMetaData } from '@gdg/router/components/MetaData';
import styled from '@emotion/styled';
import { useState, useCallback, useEffect } from 'react';

import { myTechBlogMetaDataInterface } from '@gdg/types/UserInterface';
import { getMySaves } from '@gdg/apis/hooks/mypage/useGetMySaves';
import PageTitle from '@gdg/components/common/title/PageTitle';

const PostListLayout = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 45px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

const MyTechBlogPage = () => {
  const [mySavesList, setMySavesList] = useState<myTechBlogMetaDataInterface[]>(
    []
  );

  const fetchTrendPosts = useCallback(
    async (status: 'TEMPORAL' | 'SAVED', size?: number) => {
      try {
        const response = await getMySaves(status, size);
        console.log(response.data);
        setMySavesList(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  useEffect(() => {
    fetchTrendPosts('SAVED');
  }, []);

  return (
    <>
      {/* <TeamBlogMetaData /> */}
      <PostListLayout>
        {' '}
        <PageTitle MainTitle='내 블로그' SubTitle='My TechBlog' />
      </PostListLayout>
    </>
  );
};

export default MyTechBlogPage;
