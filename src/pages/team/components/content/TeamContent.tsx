import styled from '@emotion/styled';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { TeamList } from '@gdg/apis/hooks/team/useGetTeamList';
// import LazyLoad from '@gdg/components/common/View/LazyLoad';
import {
  TeamMember,
  TeamCalendar,
  TeamTitle,
  TeamTitleMobile,
} from '@gdg/pages/team/components';
// const TeamBlogList = lazy(() => import('../blog/TeamBlogList'));

const TeamContent = ({ data }: { data: TeamList[] }) => {
  const [selectedTeamName, setSelectedTeamName] = useState<string>(
    `${data[0].teamName}`
  );
  const [selectedTeamId, setSelectedTeamId] = useState<number>(data[0].id);
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <TeamContainer>
      {isMobile ? (
        <TeamTitleMobile
          dropDownData={data}
          onSelect={setSelectedTeamName}
          onSelectId={setSelectedTeamId}
        />
      ) : (
        <TeamTitle
          dropDownData={data}
          onSelect={setSelectedTeamName}
          onSelectId={setSelectedTeamId}
        />
      )}

      <TeamMember
        selectedTeamId={selectedTeamId}
        selectedTeamName={selectedTeamName}
      />

      <TeamCalendar selectedTeamName={selectedTeamName} />

      {/* <LazyLoad>
        <TeamBlogList selectedTeamName={selectedTeamName} />
      </LazyLoad> */}
    </TeamContainer>
  );
};

export default TeamContent;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
