import { memo } from 'react';

import Text from '@gdg/components/common/typography/Text';

import RatioImg from './RatioImg';
import styled from '@emotion/styled';

type CardType = {
  src: string;
  title: string;
  subtitle: string;
  track: string;
  date: string;
};

const ThumbNailCard = memo<CardType>(
  ({ src, title, subtitle, track, date }) => {
    return (
      <Card>
        <RatioImg src={src} breakpoint='md' />
        <CardContent>
          <MainTitle>{title}</MainTitle>
          <SubTitle>{subtitle}</SubTitle>
          <DetailContent>
            <TrackBox>{track}</TrackBox>
            <Date>{date}</Date>
          </DetailContent>
        </CardContent>
      </Card>
    );
  }
);

ThumbNailCard.displayName = 'ThumbNailCard';

export default ThumbNailCard;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled(Text)`
  font-weight: 700;
  font-size: var(--font-size-xl);
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 500px) {
    font-size: var(--font-size-lg);
  }
`;

const SubTitle = styled(Text)`
  font-weight: 400;
  font-size: var(--font-size-md);
  margin-top: 6.5px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 500px) {
    font-size: var(--font-size-sm);
  }
`;

// track, date 태그 위치 div
const DetailContent = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 10px;
  margin-bottom: 20px;

  gap: 20px;
`;

const TrackBox = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  padding: 2px 12px;

  font-size: var(--font-size-xs);
`;

const Date = styled(Text)`
  font-size: var(--font-size-xs);
  color: var(--color-white);
`;
