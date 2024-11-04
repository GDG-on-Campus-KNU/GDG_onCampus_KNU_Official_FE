import { useState, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

import LazyLoad from '@gdg/components/common/View/LazyLoad';
import { Spacing } from '@gdg/components/common/layouts/spacing';

import { TeamList } from '@gdg/apis/hooks/team/useGetTeamList';

import styled from '@emotion/styled';

const TeamMember = lazy(() => import('../member'));
const TeamCalendar = lazy(() => import('../calendar'));
const TeamTitle = lazy(() => import('../title/TeamTitle'));
const TeamTitleMobile = lazy(() => import('../title/TeamTitle.mobile'));
const TeamBlogList = lazy(() => import('../blog'));

const TeamContent = ({ data }: { data: TeamList[] }) => {
  const [selectedTeamName, setSelectedTeamName] = useState<string>(
    `${data[0].teamName}`
  );
  const [selectedTeamId, setSelectedTeamId] = useState<number>(data[0].id);
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <TeamContainer>
      {isMobile ? (
        <LazyLoad
          component={TeamTitleMobile}
          props={{
            dropDownData: data ?? [],
            onSelect: setSelectedTeamName,
            onSelectId: setSelectedTeamId,
          }}
        />
      ) : (
        <LazyLoad
          component={TeamTitle}
          props={{
            dropDownData: data ?? [],
            onSelect: setSelectedTeamName,
            onSelectId: setSelectedTeamId,
          }}
        />
      )}

      <LazyLoad
        component={TeamMember}
        props={{
          selectedTeamId,
          selectedTeamName,
        }}
      />
      <LazyLoad component={TeamCalendar} props={{ selectedTeamName }} />
      <LazyLoad component={TeamBlogList} props={{ selectedTeamName }} />
    </TeamContainer>
  );
};

export default TeamContent;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
