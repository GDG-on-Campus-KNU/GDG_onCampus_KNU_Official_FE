// import { TeamBlogMetaData } from '@gdg/router/components/MetaData';
import styled from '@emotion/styled';

import { Spinner } from '@gdg/components/common/Spinner';
import { getMySaves } from '@gdg/apis/hooks/mypage/useGetMySaves';
import PageTitle from '@gdg/components/common/title/PageTitle';

import SavesCard from './components/SavesCard';
import useInfinityMyData from './hooks/useInfinityMyData';

const PostListLayout = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 50px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const MyTempBlogPage = () => {
  const {
    observerRef,
    data: myTempSavesList,
    isPending,
    hasNext,
  } = useInfinityMyData('TEMPORAL', getMySaves);

  return (
    <>
      {/* <TeamBlogMetaData /> */}
      <PageTitle MainTitle='임시 글' SubTitle='Temporal TechBlog' />

      <PostListLayout>
        {myTempSavesList.map((e, i) => {
          return <SavesCard key={i} {...e} status='TEMPORAL' />;
        })}
        {isPending && <Spinner />}
        {hasNext && <div ref={observerRef}></div>}
      </PostListLayout>
    </>
  );
};

export default MyTempBlogPage;
