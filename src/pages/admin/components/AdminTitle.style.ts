import styled from "@emotion/styled";

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