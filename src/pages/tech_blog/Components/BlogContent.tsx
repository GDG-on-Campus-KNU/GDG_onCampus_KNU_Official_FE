import ReactMarkDown from 'react-markdown';

import { blogPostDetailInterface } from '@gdg/types/UserInterface';
import Text from '@gdg/components/common/typography/Text';
import { trackKoreanMapping } from '@gdg/components/common/select/trackSelectBar/getTrack';

import {
  TitleContainer,
  SubTitleContainer,
  ContentContainer,
} from '../hooks/TechBlogDetailPage.style';
import { TrackCard } from './PostCard.style';

const BlogContent = ({ postData }: { postData: blogPostDetailInterface }) => {
  return (
    <>
      <TitleContainer>
        <Text size='sxl' color='white' weight='bold'>
          {postData.title}
        </Text>
        <SubTitleContainer>
          <TrackCard>{trackKoreanMapping(postData.category)}</TrackCard>
          <Text size='sm' color='white'>
            {postData.createAt.split(' ')[0].replace(/-/g, '.')}
          </Text>
          <Text size='sm' color='white'>
            |
          </Text>
          <Text size='sm' color='white'>
            {postData.authorName}
          </Text>
        </SubTitleContainer>
      </TitleContainer>
      <ContentContainer>
        <ReactMarkDown>{postData.content}</ReactMarkDown>
      </ContentContainer>
    </>
  );
};

export default BlogContent;
