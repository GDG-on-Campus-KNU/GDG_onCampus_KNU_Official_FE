import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const LazyLoadImg = ({
  image,
}: {
  image: {
    alt: string;
    src: string;
    width?: number | string;
    height?: number | string;
  };
}) => (
  <LazyLoadImage
    alt={image.alt}
    effect='blur'
    wrapperProps={{
      style: { transitionDelay: '0.7s' },
    }}
    src={image.src}
    width={image.width}
    height={image.height}
  />
);
