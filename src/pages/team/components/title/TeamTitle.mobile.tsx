import styled from '@emotion/styled';
import { lazy } from 'react';

import { TeamList } from '@gdg/apis/hooks/team/useGetTeamList';
import { DropBoxContainer } from '@gdg/pages/team/components/title/TeamTitle';

const DropDown = lazy(() => import('@gdg/components/common/dropdown'));
const Text = lazy(() => import('@gdg/components/common/typography/Text'));

const TeamTitleMobile = ({
  dropDownData,
  onSelect,
  onSelectId,
}: {
  dropDownData: TeamList[];
  onSelect: (name: string) => void;
  onSelectId: (id: number) => void;
}) => {
  const handleSelect = (selectedOption: TeamList) => {
    // console.log('Selected option:', selectedOption);
    onSelect(selectedOption.teamName);
    onSelectId(selectedOption.id);
  };

  return (
    <TitleMobileContainer>
      <TitleLayout>
        <Text color='var(--color-white)' weight='700' size='lg'>
          팀페이지
        </Text>
        <DropBoxContainer>
          <DropDown options={dropDownData} onSelect={handleSelect} />
        </DropBoxContainer>
      </TitleLayout>
    </TitleMobileContainer>
  );
};

export default TeamTitleMobile;

const TitleMobileContainer = styled.div`
  width: 100%;
  padding: 32px 0px 50px 0px;
`;

const TitleLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
