// import { TeamBlogMetaData } from '@gdg/router/components/MetaData';
import styled from '@emotion/styled';
import { useState, useCallback, useEffect } from 'react';

import { myTechBlogMetaDataInterface } from '@gdg/types/UserInterface';
import { getMySaves } from '@gdg/apis/hooks/mypage/useGetMySaves';
import PageTitle from '@gdg/components/common/title/PageTitle';

import SavesCard from './components/SavesCard';

const PostListLayout = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 50px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MyTechBlogPage = () => {
  const [mySavesList, setMySavesList] = useState<myTechBlogMetaDataInterface[]>(
    []
  );

  const fetchTrendPosts = useCallback(
    async (status: 'TEMPORAL' | 'SAVED', size?: number) => {
      try {
        const response = await getMySaves(status, size);
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
      <PageTitle MainTitle='내 블로그' SubTitle='My TechBlog' />

      <PostListLayout>
        {mySavesList.map((e, i) => {
          return <SavesCard key={i} {...e} />;
        })}
      </PostListLayout>
    </>
  );
};

export default MyTechBlogPage;
