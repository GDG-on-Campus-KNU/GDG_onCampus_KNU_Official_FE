import { useMediaQuery } from 'react-responsive';

import MainFooter from '@gdsc/components/common/footer/MainFooter';
import MobileFooterMobile from '@gdsc/components/common/footer/MainFooterMobile';

import MainRound from '@gdsc/pages/main/components/MainRound';
import Star from '@gdsc/pages/main/components/Star';

import styled from '@emotion/styled';

const DisplayLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <DisplayLayout>
      <MainRound />
      {[...Array(15)].map((_, index) => (
        <Star
          key={index}
          top={`${Math.random() * 30}%`}
          left={`${Math.random() * 100}%`}
        />
      ))}
      {isMobile ? <MobileFooterMobile /> : <MainFooter />}
    </DisplayLayout>
  );
};

export default MainPage;
