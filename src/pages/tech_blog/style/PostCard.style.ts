import styled from '@emotion/styled';

import { displayCenter } from '@gdg/styles/LayoutStyle';

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  min-width: 220px;

  height: auto;
  max-height: 340px;
  min-height: 235px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 240px;
  min-height: 135px;

  border-radius: 20px;
  background-color: var(--color-white);

  object-fit: contain;
`;

export const TrackCard = styled.div<{ $size?: string }>`
  background-color: var(--color-more-transparent);
  border-radius: ${(props) => {
    switch (props.$size) {
      case 'xs':
        return '4px';
      case 'lg':
        return '12px';
      case undefined:
        return '4px';
      default:
        return;
    }
  }};

  ${displayCenter}
  align-items: center;
  padding: ${(props) => {
    switch (props.$size) {
      case 'xs':
        return '6px 14px';
      case 'lg':
        return '13px 27px';
      case undefined:
        return '6px 14px';
      default:
        return;
    }
  }};

  font-size: ${(props) => {
    switch (props.$size) {
      case 'xs':
        return 'var(--font-size-xs)';
      case 'lg':
        return 'var(--font-size-lg)';
      case undefined:
        return 'var(--font-size-xs)';
      default:
        return;
    }
  }};
`;

export const IconContainer = styled.div<{ $width: string; $height: string }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  overflow: hidden;
  ${displayCenter}
  align-items: center;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MetaDataLayout = styled.div<{
  $gap: number;
  $dir: string;
  $center?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.$dir};
  align-items: ${(props) => (props.$center ? 'center' : 'flex-start')};

  white-space: nowrap;
  gap: ${(props) => props.$gap}px;
`;
