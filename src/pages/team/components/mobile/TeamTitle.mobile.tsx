import { lazy } from 'react';

import { DropBoxContainer } from '@gdsc/pages/team/components/TeamTitle';

import { TeamList } from '@gdsc/apis/hooks/team/useGetTeamList';

import styled from '@emotion/styled';

const DropDown = lazy(() => import('@gdsc/components/common/dropdown'));
const Text = lazy(() => import('@gdsc/components/common/typography/Text'));

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
