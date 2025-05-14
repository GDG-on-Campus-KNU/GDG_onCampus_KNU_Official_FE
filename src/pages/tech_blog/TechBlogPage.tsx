// import { TeamBlogMetaData } from '@gdg/router/components/MetaData';
import styled from '@emotion/styled';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { blogPostMetaDataInterface } from '@gdg/types/UserInterface';
import Text from '@gdg/components/common/typography/Text';
import Grid from '@gdg/components/common/layouts/grid';
import { getPostList } from '@gdg/apis/hooks/techblog/useGetPostList';
import { getTrendPostList } from '@gdg/apis/hooks/techblog/useGetTrendPostList';
import useInfinity from '@gdg/hooks/useInfinity';
import { Spinner } from '@gdg/components/common/Spinner';
import TrackSelectBar from '@gdg/components/common/select/trackSelectBar';
import { getBlogTrack } from '@gdg/components/common/select/trackSelectBar/getTrack';
import CommonBtn from '@gdg/components/common/button/CommonBtn';

import PostCard from './components/blogList/PostCard';

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

const TechBlogPage = () => {
  const [trendPost, setTrendPost] = useState<blogPostMetaDataInterface[]>([]);
  const [trackIdx, setTrackIdx] = useState<number>(0);

  const {
    observerRef,
    data: latest,
    isPending,
    hasNext,
  } = useInfinity(getBlogTrack(trackIdx), getPostList);

  const handleTrackSelect = (index: number) => {
    setTrackIdx(index);
  };

  const fetchTrendPosts = useCallback(
    async (category: string, size: number) => {
      try {
        const response = await getTrendPostList(category, size);
        setTrendPost(response);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchTrendPosts(getBlogTrack(trackIdx), 5);
  }, [fetchTrendPosts, trackIdx]);

  const tracks = [
    'TOTAL',
    'FRONTEND',
    'BACKEND',
    'ANDROID',
    'AI',
    'DESIGN',
    'ETC',
  ];
  const tracksKorean = [
    '전체',
    '프론트엔드',
    '백엔드',
    '안드로이드',
    'AI',
    '디자이너',
    '기타',
  ];

  return (
    <>
      {/* <TeamBlogMetaData /> */}
      <PostListLayout>
        <ButtonContainer>
          <Link to='/write'>
            <CommonBtn
              type='button'
              color='blue'
              backgroundColor='blue'
              hoverColor='blue'
              width='100px'
              height='42px'
            >
              글쓰기
            </CommonBtn>
          </Link>
        </ButtonContainer>

        <TrackSelectBar
          tracks={tracks}
          tracksKorean={tracksKorean}
          onSelect={handleTrackSelect}
        />
        <Text size='xl' weight='bold'>
          인기글 TOP 5
        </Text>
        <Grid columns={2} gap={36} padding={0}>
          {trendPost.map((e, i) => {
            return <PostCard key={i} {...e} />;
          })}
        </Grid>
      </PostListLayout>

      <PostListLayout>
        <Text size='xl' weight='bold'>
          최신글
        </Text>
        <Grid columns={2} gap={36} padding={0}>
          {latest.map((e, i) => {
            return <PostCard key={i} {...e} />;
          })}
        </Grid>
        {isPending && <Spinner />}
        {hasNext && <div ref={observerRef}></div>}
      </PostListLayout>
    </>
  );
};

export default TechBlogPage;
