import styled from '@emotion/styled';
import { useState, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import { TeamList } from '@gdg/apis/hooks/team/useGetTeamList';
import LazyLoad from '@gdg/components/common/View/LazyLoad';
import { Spacing } from '@gdg/components/common/layouts/spacing';

const TeamMember = lazy(() => import('../member/TeamMember'));
const TeamCalendar = lazy(() => import('../calendar/TeamCalendar'));
const TeamTitle = lazy(() => import('../title/TeamTitle'));
const TeamTitleMobile = lazy(() => import('../title/TeamTitle.mobile'));
const TeamBlogList = lazy(() => import('../blog/TeamBlogList'));

const TeamContent = ({ data }: { data: TeamList[] }) => {
  const [selectedTeamName, setSelectedTeamName] = useState<string>(
    `${data[0].teamName}`
  );
  const [selectedTeamId, setSelectedTeamId] = useState<number>(data[0].id);
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <TeamContainer>
      {isMobile ? (
        <LazyLoad>
          <TeamTitleMobile
            dropDownData={data}
            onSelect={setSelectedTeamName}
            onSelectId={setSelectedTeamId}
          />
        </LazyLoad>
      ) : (
        <LazyLoad>
          <TeamTitle
            dropDownData={data}
            onSelect={setSelectedTeamName}
            onSelectId={setSelectedTeamId}
          />
        </LazyLoad>
      )}

      <LazyLoad>
        <TeamMember
          selectedTeamId={selectedTeamId}
          selectedTeamName={selectedTeamName}
        />
      </LazyLoad>

      <LazyLoad>
        <TeamCalendar selectedTeamName={selectedTeamName} />
      </LazyLoad>

      <LazyLoad>
        <TeamBlogList selectedTeamName={selectedTeamName} />
      </LazyLoad>
    </TeamContainer>
  );
};

export default TeamContent;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
