import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  background-color: var(--color-midnight);
`;

export const Container = styled.div`
  width: 95%;
  height: 100vh;

  display: flex;
  background-color: var(--color-midnight);

  box-sizing: border-box;

  border: none;
  outline: none;

  flex-direction: column;
  box-sizing: border-box;
`;

export const TitleContainer = styled.input`
  width: 100%;
  height: 60px;

  margin: 25px 0px;
  padding: 15px;

  background-color: transparent;
  color: var(--color-white);

  font-size: var(--font-size-xxl);
  font-weight: 700;

  outline: none;
  border: none;
  border-radius: 15px;

  &::placeholder {
    color: var(--color-white);
    opacity: 0.8;
  }
`;

export const NavBarContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: transparent;
`;

export const StyledModeBtn = styled.button`
  background-color: var(--color-more-transparent);
  color: var(--color-white);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    color: var(--color-silver);
  }
`;

export const StyledOutBtn = styled.button`
  background-color: var(--color-more-transparent);
  color: var(--color-white);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    color: var(--color-silver);
  }
`;

export const StyledPostBtn = styled.button`
  background-color: var(--color-aqua);
  color: var(--color-white);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    color: var(--color-silver);
    background-color: var(--color-ocean);
  }
`;

export const StyledSaveBtn = styled.button`
  background-color: var(--color-more-transparent);
  color: var(--color-white);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    color: var(--color-silver);
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
  margin: 20px 0px;

  border: none;
  box-sizing: border-box;
`;
