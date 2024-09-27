import { lazy } from 'react';

import { DisplayLayout } from '@gdg/styles/LayoutStyle';

const TeamContent = lazy(() => import('./components/TeamContent'));
const Star = lazy(() => import('@gdg/pages/main/components/Star'));

const TeamPage = () => {
  return (
    <>
      <DisplayLayout>
        <TeamContent />
        {[...Array(25)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 30}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </DisplayLayout>
    </>
  );
};

export default TeamPage;
