import styled from '@emotion/styled';

export const TitleWrapper = styled.h1`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 35px 60px;

  box-sizing: border-box;
`;

export const SubtitleTextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2px;
`;

export const HamburgerMenu = styled.img`
  width: 40px;
  cursor: pointer;
`;

export const MobileTitleWrapper = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
`;

export const MobileContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MobileContentContainer = styled.div`
  width: 80%;
  height: 360px;
  background-color: var(--color-more-transparent);
  border-radius: 12px;
  margin-top: 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MobileWarningText = styled.span`
  color: var(--color-cinarbar);
  font-size: 20px;
  font-weight: 700;
`;

export const MobileWarningContent = styled.span`
  color: var(--color-white);
  font-size: var(--font-size-xs);
  text-align: center;
  margin: 20px 0 40px 0;
`;

export const MobileButtonWrapper = styled.div`
  width: 85%;
`;

export const MobileContainer = styled.div`
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
`;
