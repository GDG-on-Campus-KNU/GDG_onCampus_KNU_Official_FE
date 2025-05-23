import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const LazyLoadImg = ({
  image,
  style,
}: {
  image: {
    alt: string;
    src: string;
    width?: number | string;
    height?: number | string;
  };
  className?: string;
  style?: React.CSSProperties;
}) => (
  <LazyLoadImage
    alt={image.alt}
    effect='blur'
    wrapperProps={{
      style: { transitionDelay: '1s' },
    }}
    src={image.src}
    width={image.width}
    height={image.height}
    style={style}
  />
);
