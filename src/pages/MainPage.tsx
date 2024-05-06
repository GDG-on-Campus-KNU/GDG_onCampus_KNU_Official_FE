import { useMediaQuery } from 'react-responsive';

import MainFooter from '@gdsc/components/common/MainFooter';
import MobileFooterMobile from '@gdsc/components/common/MainFooterMobile';

const MainPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return <>{isMobile ? <MobileFooterMobile /> : <MainFooter />}</>;
};

export default MainPage;
