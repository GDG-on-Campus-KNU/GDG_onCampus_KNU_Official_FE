import Text from '@gdg/components/common/typography/Text';
import likes from '@gdg/assets/icon/likes.svg';
import comment from '@gdg/assets/icon/comment.svg';

import {
  BottomContainer,
  CountWrapper,
  CountContainer,
} from '../hooks/TechBlogDetailPage.style';
import { IconContainer, Icon, TrackCard } from './PostCard.style';

const Comments = ({
  likeCount,
  commentCount,
}: {
  likeCount: number;
  commentCount: number;
}) => {
  return (
    <>
      <BottomContainer>
        <CountWrapper>
          <CountContainer>
            <IconContainer $width={'20px'} $height={'17px'}>
              <Icon src={likes} alt='likes' />
            </IconContainer>
            <Text size='md' weight='bold' color='white'>
              {likeCount}
            </Text>
          </CountContainer>
          <CountContainer>
            <IconContainer $width={'20px'} $height={'17px'}>
              <Icon src={comment} alt='comment' />
            </IconContainer>
            <Text size='md' weight='bold' color='white'>
              {commentCount}
            </Text>
          </CountContainer>
        </CountWrapper>
        <TrackCard $size='lg'>블로그 홈</TrackCard>
      </BottomContainer>
    </>
  );
};

export default Comments;
