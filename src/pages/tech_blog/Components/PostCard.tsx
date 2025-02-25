import { Link } from 'react-router-dom';

import Text from '@gdg/components/common/typography/Text';
import gdgknu from '@gdg/assets/gdgknu.png';
import likes from '@gdg/assets/icon/likes.svg';
import comment from '@gdg/assets/icon/comment.svg';
import { blogPostMetaDataInterface } from '@gdg/types/UserInterface';
import { trackKoreanMapping } from '@gdg/components/common/select/trackSelectBar/getTrack';

import {
  CardWrapper,
  Image,
  MetaDataLayout,
  TrackCard,
  Icon,
  IconContainer,
} from './PostCard.style';

const PostCard = (props: blogPostMetaDataInterface) => {
  return (
    <Link key={props.id} to={`/techblog/${props.id}`}>
      <CardWrapper>
        <Image src={props.thumbnailUrl || gdgknu} alt='thumbnail' />
        <MetaDataLayout $gap={8} $dir='column'>
          <Text size='xl' weight='bold'>
            {props.title}
          </Text>
          <MetaDataLayout $gap={6} $dir='column'>
            <Text size='md'>본문 미리보기 또는 부제목</Text>
            <MetaDataLayout $gap={12} $dir='row'>
              <TrackCard>{trackKoreanMapping(props.category)}</TrackCard>
              <Text>{props.createAt.split(' ')[0].replace(/-/g, '.')}</Text>
              <Text>|</Text>
              <MetaDataLayout $gap={5} $dir='row' $center={true}>
                <IconContainer $width={'14px'} $height={'11.6px'}>
                  <Icon src={likes} alt='likes' />
                </IconContainer>
                <Text>{props.likeCount}</Text>
              </MetaDataLayout>
              <MetaDataLayout $gap={5} $dir='row' $center={true}>
                <IconContainer $width={'14px'} $height={'11.6px'}>
                  <Icon src={comment} alt='comment' />
                </IconContainer>
                <Text>{props.commentCount}</Text>
              </MetaDataLayout>
            </MetaDataLayout>
          </MetaDataLayout>
        </MetaDataLayout>
      </CardWrapper>
    </Link>
  );
};

export default PostCard;
