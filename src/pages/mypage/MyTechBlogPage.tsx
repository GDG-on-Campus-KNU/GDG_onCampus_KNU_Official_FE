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

const MyTechBlogPage = () => {
  const {
    observerRef,
    data: mySavesList,
    isPending,
    hasNext,
  } = useInfinityMyData('SAVED', getMySaves);

  return (
    <>
      {/* <TeamBlogMetaData /> */}
      <PageTitle MainTitle='내 블로그' SubTitle='My TechBlog' />

      <PostListLayout>
        {mySavesList.map((e, i) => {
          return <SavesCard key={i} {...e} />;
        })}
        {isPending && <Spinner />}
        {hasNext && <div ref={observerRef}></div>}
      </PostListLayout>
    </>
  );
};

export default MyTechBlogPage;
