import styled from '@emotion/styled';

export const PassBtn = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 0;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: var(--font-size-md);
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-selective)' : '#ffffff26'};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  height: 100%;
  margin-bottom: 1rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;
