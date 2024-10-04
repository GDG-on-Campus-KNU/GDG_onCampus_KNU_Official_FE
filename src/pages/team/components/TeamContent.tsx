import { useState, lazy, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useGetTeamList } from '@gdg/apis/hooks/team/useGetTeamList';

import styled from '@emotion/styled';

const TeamMember = lazy(() => import('./TeamMember'));
const TeamName = lazy(() => import('./TeamName'));
const TeamTitle = lazy(() => import('./TeamTitle'));
const TeamTitleMobile = lazy(() => import('./mobile/TeamTitle.mobile'));

const TeamContent = () => {
  const { data } = useGetTeamList();
  const [selectedTeamName, setSelectedTeamName] = useState<string>('');
  const [selectedTeamId, setSelectedTeamId] = useState<number>(0);
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedTeamId(data[0].id);
    }
  }, [data]);

  return (
    <TeamContainer>
      {isMobile ? (
        <TeamTitleMobile
          dropDownData={data ?? []}
          onSelect={setSelectedTeamName}
          onSelectId={setSelectedTeamId}
        />
      ) : (
        <TeamTitle
          dropDownData={data ?? []}
          onSelect={setSelectedTeamName}
          onSelectId={setSelectedTeamId}
        />
      )}

      <TeamName selectedTeamName={selectedTeamName} />
      <TeamMember selectedTeamId={selectedTeamId} />
    </TeamContainer>
  );
};

export default TeamContent;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
