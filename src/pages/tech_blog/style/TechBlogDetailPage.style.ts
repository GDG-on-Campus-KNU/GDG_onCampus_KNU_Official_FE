import styled from '@emotion/styled';

import { displayCenter } from '../../../styles/LayoutStyle';

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 1024px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border-bottom: 1px solid white;
  padding: 28px 0px;
`;

export const SubTitleContainer = styled.div`
  width: 25%;
  min-width: 224px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 724px;

  display: flex;
  flex-direction: column;

  padding: 50px 0;
  border-bottom: 1px solid white;
`;

export const BottomContainer = styled.div`
  width: 90%;
  max-width: 724px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 34px;
`;

export const CountContainer = styled.div`
  width: 58px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountWrapper = styled.div`
  width: 146px;
  display: flex;
  justify-content: space-between;
`;

export const CommentWrapper = styled.div`
  width: 90%;
  max-width: 724px;
  min-height: 420px;

  ${displayCenter}
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  border-top: 2px solid white;
`;
