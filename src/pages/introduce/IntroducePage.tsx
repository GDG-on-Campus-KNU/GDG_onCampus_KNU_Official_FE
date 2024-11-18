import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import useScrollTracker from '@gdg/hooks/useScrollTracker';
import AboutEvent from '@gdg/pages/introduce/components/AboutEvent';
import CoreTable from '@gdg/pages/introduce/components/CoreTable';
import Diagonal from '@gdg/pages/introduce/components/Diagonal';
import FieldEvent from '@gdg/pages/introduce/components/FieldEvent';
import FieldTable from '@gdg/pages/introduce/components/FieldTable';
import IntroduceEvent from '@gdg/pages/introduce/components/IntroduceEvent';
import LineEvent from '@gdg/pages/introduce/components/LineEvent';
import { IntroduceMetaData } from '@gdg/router/components/MetaData';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

gsap.registerPlugin(ScrollTrigger);

const IntroducePage = () => {
  useScrollTracker();

  return (
    <>
      <IntroduceMetaData />
      <DisplayLayout>
        <AboutEvent />
        <LineEvent />
        <IntroduceEvent />
        <CoreTable />
        <Diagonal />
        <FieldEvent />
        <FieldTable />
      </DisplayLayout>
    </>
  );
};
export default IntroducePage;
