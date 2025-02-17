// import { TeamBlogMetaData } from '@gdg/router/components/MetaData';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { blogPostMetaDataInterface } from '@gdg/types/UserInterface';
import Text from '@gdg/components/common/typography/Text';
import Grid from '@gdg/components/common/layouts/grid';
import PageTitle from '@gdg/components/common/title/PageTitle';
import { getPostList } from '@gdg/apis/hooks/techblog/useGetPostList';
import { getTrendPostList } from '@gdg/apis/hooks/techblog/useGetTrendPostList';
import useInfinity from '@gdg/hooks/useInfinity';
import { Spinner } from '@gdg/components/common/Spinner';

import PostCard from './Components/PostCard';

const PostListLayout = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 45px;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TechBlogPage = () => {
  const [trendPost, setTrendPost] = useState<blogPostMetaDataInterface[]>([]);
  const {
    observerRef,
    data: latest,
    isPending,
    hasNext,
  } = useInfinity('', getPostList);

  const fetchTrendPosts = async (category: string, size: number) => {
    try {
      const response = await getTrendPostList(category, size);
      setTrendPost(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrendPosts('BACKEND', 5);
  }, []);

  return (
    <>
      {/* <TeamBlogMetaData /> */}
      <PageTitle MainTitle='테크 블로그' SubTitle='Tech Blog' />
      <PostListLayout>
        <Text size='xl' weight='bold'>
          인기글 TOP 5
        </Text>
        <Grid columns={2} gap={36} padding={0}>
          {trendPost.map((e, i) => {
            return <PostCard key={i} title={e.title} />;
          })}
        </Grid>
      </PostListLayout>

      <PostListLayout>
        <Text size='xl' weight='bold'>
          최신글
        </Text>
        <Grid columns={2} gap={36} padding={0}>
          {latest.map((e, i) => {
            return <PostCard key={i} title={e.title} />;
          })}
        </Grid>
        {isPending && <Spinner />}
        {hasNext && <div ref={observerRef}></div>}
      </PostListLayout>
    </>
  );
};

export default TechBlogPage;
