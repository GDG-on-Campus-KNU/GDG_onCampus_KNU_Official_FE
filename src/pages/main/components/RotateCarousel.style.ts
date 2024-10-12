import styled from '@emotion/styled';
import Text from '@gdg/components/common/typography/Text';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  font-size: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Scene = styled.div`
  width: 210px;
  height: 200px;
  position: relative;
  perspective: 1400px;
  perspective-origin: center -200%;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 180px;
    height: 170px;
  }

  @media (max-width: 500px) {
    width: 160px;
    height: 150px;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  top: 10%;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 0.5s;
`;

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  font-size: 24px;
  color: var(--color-black);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-white);
`;

export const EarthImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-25%, -40%);
`;

export const CardMainText = styled(Text)`
  position: relative;
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 40%;
    background: var(--color-selective);
    z-index: -1;
  }

  @media (max-width: 500px) {
    ::before {
      top: 5px;
    }
  }
`;

export const ContentText = styled(Text)`
  padding: 20px;
  width: calc(100% - 40px);
`;

export const ArrowImg = styled.img`
  width: 57px;
  height: 57px;

  @media (max-width: 767px) {
    width: 47px;
    height: 47px;
  }
`;

export const CompleteBtnWrapper = styled.div`
  width: 90%;
`;

export const EarthVideo = styled.video`
  width: 150%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: view-box ellipse(44% 44%);
`;
