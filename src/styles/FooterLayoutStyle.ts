import styled from '@emotion/styled';

import { displayCenter } from '@gdg/styles/LayoutStyle';

export const Footer = styled.footer`
  width: 100%;
  height: 283.5px;
  ${displayCenter}
  background-color: var(--color-revolver);

  @media (max-width: 767px) {
    height: 249px;
  }
  @media (max-width: 359px) {
    height: 160px;
  }
`;

export const DisplayFooter = styled.div`
  ${displayCenter}
  align-items: center;
  width: 100%;
  max-width: 1024px;
  height: 283.5px;
  @media (max-width: 767px) {
    height: 249px;
  }
  @media (max-width: 359px) {
    height: 160px;
  }
`;

export const Display = styled.div`
  ${displayCenter}
  flex-direction: column;
  width: 90%;
  max-width: 900px;
  height: 123px;
  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-width: 359px) {
    width: 296px;
    height: 98.52px;
  }
`;

export const TextBorder = styled.div`
  border-top: 1px solid var(--color-white);
  border-bottom: 1px solid var(--color-white);
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const TableData = styled.td`
  width: 25%;
`;
