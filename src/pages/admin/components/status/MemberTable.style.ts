import styled from '@emotion/styled';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0px;
`;

export const TableHeader = styled.thead`
  height: 59px;
  background-color: rgba(255, 255, 255, 0.7);
  color: var(--color-halti);
  white-space: nowrap;
  text-align: left;
`;

export const TableHeaderRow = styled.tr`
  border-bottom: none;
`;

export const TableCell = styled.td`
  height: 59px;
  border: none;
  white-space: nowrap;

  font-size: 14px;

  &:first-of-type {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding-left: 10px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding-right: 10px;
  }
`;

export const TableHeaderCell = styled.th`
  border: none;

  &:first-of-type {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;
