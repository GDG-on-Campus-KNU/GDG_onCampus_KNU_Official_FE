import { ratioBreakpoints } from './variants';
import styled from '@emotion/styled';
import { LazyLoadImg } from '@gdg/components/common/img/LazyLoadingImg';

const RatioImg = ({
  src,
  breakpoint = 'md',
}: {
  src: string;
  breakpoint?: keyof typeof ratioBreakpoints;
}) => {
  const aspectRatio = ratioBreakpoints[breakpoint] || 1;

  return (
    <ImageWrapper aspectRatio={aspectRatio}>
      <LazyLoadImg
        image={{
          alt: '',
          src: `${src}`,
        }}
      />
    </ImageWrapper>
  );
};

export default RatioImg;

const ImageWrapper = styled.div<{ aspectRatio: number }>`
  width: 100%;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;
