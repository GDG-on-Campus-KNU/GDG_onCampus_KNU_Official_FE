import styled from '@emotion/styled';
import type { TeamList } from '@gdg/apis/hooks/team/useGetTeamList';
import {
  TitleLayout,
  MainTitle,
  SubTitle,
  Explain,
  SubLayout,
} from '@gdg/styles/ApplyStyle';
import { lazy } from 'react';

const DropDown = lazy(() => import('@gdg/components/common/dropdown'));

const TeamTitle = ({
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
    <TitleContainer>
      <TitleLayout>
        <TitleSection>
          <TitleContent>
            <MainTitle color='var(--color-white)'>팀페이지</MainTitle>
            <SubLayout>
              <SubTitle color='var(--color-white)'>Team Page</SubTitle>
              <Explain>GDG on Campus KNU</Explain>
            </SubLayout>
          </TitleContent>
          <DropBoxContainer>
            <DropDown options={dropDownData} onSelect={handleSelect} />
          </DropBoxContainer>
        </TitleSection>
      </TitleLayout>
    </TitleContainer>
  );
};

export default TeamTitle;

const TitleContainer = styled.div`
  padding: 50px 62px 64px 62px;
  width: calc(100% - 134px);
  /* border: 3px solid var(--color-white); */
`;

const TitleSection = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropBoxContainer = styled.div`
  display: flex;
  align-items: end;
  width: 120px;

  @media (max-width: 500px) {
    width: 130px;
  }
`;
