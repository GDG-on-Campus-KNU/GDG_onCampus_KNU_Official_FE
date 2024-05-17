import { displayCenter } from '@gdsc/styles/LayoutStyle';

import styled from '@emotion/styled';

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

const TeamToken = ({ teamname }: { teamname: string }) => {
  return <TokenContainer>{teamname}</TokenContainer>;
};

export default TeamToken;
