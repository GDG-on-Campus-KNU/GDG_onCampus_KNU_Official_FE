import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import Text from '@gdg/components/common/typography/Text';
import { Spinner } from '@gdg/components/common/Spinner';
import { useGetPostDetail } from '@gdg/apis/hooks/techblog/useGetPostDetail';
import { displayCenter } from '@gdg/styles/LayoutStyle';
import { trackKoreanMapping } from '@gdg/components/common/select/trackSelectBar/getTrack';

import { TrackCard } from './Components/PostCard.style';

const TitleContainer = styled.div`
  width: 100%;
  max-width: 1024px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border-bottom: 1px solid white;
  padding: 28px 0px;
`;

const SubTitleContainer = styled.div`
  width: 25%;
  min-width: 224px;

  display: flex;
  justify-content: space-between;
`;

const TechBlogDetailPage = () => {
  const params = useParams();
  const userId = params.id;
  const postId = userId ? parseInt(userId) : null;

  const postData = useGetPostDetail(postId);
  console.log(postData.data);

  return (
    <>
      {postData.isPending && <Spinner />}
      {postData.data && (
        <>
          <TitleContainer>
            <Text size='sxl' color='white' weight='bold'>
              {postData.data.title}
            </Text>
            <SubTitleContainer>
              <TrackCard>
                {trackKoreanMapping(postData.data.category)}
              </TrackCard>
              <Text size='sm' color='white'>
                {postData.data.createAt.split(' ')[0].replace(/-/g, '.')}
              </Text>
              <Text size='sm' color='white'>
                |
              </Text>
              <Text size='sm' color='white'>
                {postData.data.authorName}
              </Text>
            </SubTitleContainer>
          </TitleContainer>
          <Text>{postData.data.content}</Text>
        </>
      )}
    </>
  );
};

export default TechBlogDetailPage;
