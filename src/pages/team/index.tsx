import { lazy } from 'react';

import InnerCircle from '@gdg/components/feature/background/InnerCircle';
import CrossShape from '@gdg/components/feature/star/Cross';
import Star from '@gdg/components/feature/star/Star';

import { useGetTeamList } from '@gdg/apis/hooks/team/useGetTeamList';

import { DisplayLayout } from '@gdg/styles/LayoutStyle';

import styled from '@emotion/styled';

const TeamContent = lazy(() => import('./components/content/TeamContent'));

const TeamLayout = styled(DisplayLayout)`
  height: 100%;
  display: block;
  overflow: auto;
`;

const TeamPage = () => {
  const { data } = useGetTeamList();

  return (
    <>
      <TeamLayout>
        {data && <TeamContent data={data} />}
        <InnerCircle />

        {[...Array(5)].map((_, index) => (
          <CrossShape
            key={index}
            top={`${Math.random() * (50 - 10) + 10}%`}
            left={`${Math.random() * (85 - 15) + 15}%`}
          />
        ))}
        {[...Array(10)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * (50 - 10) + 10}%`}
            left={`${Math.random() * (85 - 15) + 15}%`}
          />
        ))}
      </TeamLayout>
    </>
  );
};

export default TeamPage;
