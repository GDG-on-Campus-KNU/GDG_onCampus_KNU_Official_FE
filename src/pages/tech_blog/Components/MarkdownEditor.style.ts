import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  background-color: var(--color-white);
`;

export const Container = styled.div`
  width: 95%;
  height: 100vh;

  display: flex;
  background-color: var(--color-white);

  box-sizing: border-box;

  border: none;
  outline: none;

  flex-direction: column;
  box-sizing: border-box;
`;

export const TitleContainer = styled.input`
  width: 100%;
  height: 140px;

  padding: 15px;

  background-color: transparent;
  color: var(--color-black);

  font-size: var(--font-size-xxl);
  font-weight: 700;

  outline: none;
  border: none;
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

export const StyledOutBtn = styled.button`
  background-color: transparent;
  color: var(--color-black);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    background-color: #434343;
  }
`;

export const StyledPostBtn = styled.button`
  background-color: #00a3ff;
  color: var(--color-white);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    background-color: #434343;
  }
`;

export const StyledSaveBtn = styled.button`
  background-color: transparent;
  color: #00a3ff;

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 18px;

  text-transform: none;

  &:hover {
    background-color: #434343;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  box-sizing: border-box;
`;
