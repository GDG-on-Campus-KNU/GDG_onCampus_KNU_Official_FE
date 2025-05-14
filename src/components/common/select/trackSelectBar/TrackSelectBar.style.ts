import styled from '@emotion/styled';

export const SelectBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 25px;

  display: flex;
  align-items: center;

  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
`;

export const TrackBtnStyle = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    `
    border-bottom: 5px solid var(--color-white);
  `}
`;
