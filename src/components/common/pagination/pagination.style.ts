import styled from '@emotion/styled';
import { displayCenter } from '@gdg/styles/LayoutStyle';

export const PageBtn = styled.button<{ isActive?: boolean }>`
  color: var(--color-white);
  background-color: transparent;

  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    color: var(--color-silver);
    font-weight: bold;
  }

  ${({ isActive }) =>
    isActive &&
    `
    font-size: var(--size-md);
    font-weight: bold;
  `}
`;

export const PageList = styled.div`
  ${displayCenter}
  align-items: center;
  gap: 20px;

  margin-top: 30px;
  margin-bottom: 50px;
`;

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  currentGroup: number;
  onPageChange: (page: number) => void;
  onNextGroup: () => void;
  onPrevGroup: () => void;
}
