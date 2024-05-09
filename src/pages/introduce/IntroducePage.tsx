import gsap from 'gsap';

import AboutEvent from '@gdsc/pages/introduce/components/AboutEvent';
import CoreTable from '@gdsc/pages/introduce/components/CoreTable';
import Diagonal from '@gdsc/pages/introduce/components/Diagonal';
import FieldEvent from '@gdsc/pages/introduce/components/FieldEvent';
import FieldTable from '@gdsc/pages/introduce/components/FieldTable';
import IntroduceEvent from '@gdsc/pages/introduce/components/IntroduceEvent';
import LineEvent from '@gdsc/pages/introduce/components/LineEvent';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroducePage = () => {
  return (
    <DisplayLayout>
      <AboutEvent />
      <LineEvent />
      <IntroduceEvent />
      <CoreTable />
      <Diagonal />
      <FieldEvent />
      <FieldTable />
    </DisplayLayout>
  );
};
export default IntroducePage;
