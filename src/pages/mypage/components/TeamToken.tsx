import styled from '@emotion/styled';
import { displayCenter } from '@gdg/styles/LayoutStyle';

type teamData = {
  teamName: string;
  teamPageUrl: string;
};

const TokenContainer = styled.div`
  ${displayCenter}
  align-items: center;

  height: 45px;

  background-color: var(--color-white);
  color: var(--color-black);

  font-family: 'Noto+Sans';
  font-weight: bold;

  border: none;
  border-radius: 12px;

  margin: 10px 10px 10px 0px;
  padding: 0px 10px;
`;

const TeamToken = ({ teamData }: { teamData: teamData }) => {
  return <TokenContainer>{teamData.teamName}</TokenContainer>;
};

export default TeamToken;
