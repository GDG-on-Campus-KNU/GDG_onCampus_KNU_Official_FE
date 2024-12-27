import styled from '@emotion/styled';

import { displayCenter } from '@gdg/styles/LayoutStyle';

import { DividingLine } from './ApplyDetailModal.style';

const DropdownContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-top: 2px;
  z-index: 10;

  background-color: var(--color-white);
  border-radius: 12px;
  padding: 15px;

  ${displayCenter}
  align-items: center;
  flex-direction: column;
`;

const YearIdButton = styled.div`
  ${displayCenter}

  width: 100%;

  background-color: transparent;
  color: var(--color-black);
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const ClassYearIdDropDown = () => {
  return (
    <DropdownContainer>
      <YearIdButton>1기</YearIdButton>
      <DividingLine />
      <YearIdButton>2기</YearIdButton>
      <DividingLine />
      <YearIdButton>3기</YearIdButton>
      <DividingLine />
      <YearIdButton>4기</YearIdButton>
    </DropdownContainer>
  );
};

export default ClassYearIdDropDown;
