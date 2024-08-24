import styled from '@emotion/styled';

export const SearchBarContainer = styled.form`
  width: 250px;
  height: 44px;

  background-color: var(--color-que);
  color: var(--color-white);
  border-radius: 12px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  padding: 0px 20px;
  box-sizing: border-box;

  border: none;
  outline: none;
`;

export const SearchIconImg = styled.img`
  width: 20px;
  height: 20px;

  padding: 0;
  margin: 0;
`;

export const SearchInput = styled.input`
  width: 100%;

  background-color: transparent;
  padding: 0;
  margin: 0;

  border: none;
  outline: none;

  color: var(--color-white);
`;
