import styled from '@emotion/styled';

import { DateNumber } from '@gdg/pages/team/components';

type DateContentProps = {
  date: Date;
  hoveredDate?: string | null;
  onAddEvent?: (date: Date) => void;
};

const DateCell = ({ date }: DateContentProps) => {
  return (
    <DateCellContainer>
      <DateNumber date={date} />
      {/* {hoveredDate === date.toISOString() && (
        <AddButton
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAddEvent(date);
          }}
        >
          +
        </AddButton>
      )} */}
    </DateCellContainer>
  );
};

export default DateCell;

const DateCellContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// const AddButton = styled.button`
//   position: absolute;
//   top: 0px;
//   right: 80px;
//   background-color: rgba(255, 255, 255, 0.7);
//   border-radius: 4px;
//   padding: 2px 4px;
//   width: 20px;
//   height: 18px;
//   transition: all 0.6s;
//   border: none;
//   cursor: pointer;
// `;
