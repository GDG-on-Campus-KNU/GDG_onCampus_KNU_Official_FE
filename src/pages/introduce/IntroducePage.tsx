import gsap from 'gsap';

import AboutEvent from '@gdsc/pages/introduce/components/AboutEvent';
import LineEvent from '@gdsc/pages/introduce/components/LineEvent';

import { DisplayLayout } from '@gdsc/styles/LayoutStyle';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroducePage = () => {
  return (
    <DisplayLayout>
      <AboutEvent />
      <LineEvent />
      <div></div>
      <table></table>
      <div></div>
      <div></div>
      <table></table>
    </DisplayLayout>
  );
};
export default IntroducePage;
