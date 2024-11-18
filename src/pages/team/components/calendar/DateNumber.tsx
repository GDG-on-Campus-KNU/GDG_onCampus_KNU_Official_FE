import styled from '@emotion/styled';

const today = new Date().toLocaleDateString('en-CA');

// console.log(today);

const DateNumber = (arg: { date: Date }) => {
  const dateStr = arg.date.toLocaleDateString('en-CA');
  const dayNumber = arg.date.getDate();

  return (
    <DateCell>
      {dateStr === today && <TodayCircle />}
      <span style={{ color: dateStr === today ? 'black' : 'inherit' }}>
        {dayNumber}
      </span>
    </DateCell>
  );
};

export default DateNumber;

const TodayCircle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: var(--color-white);
  border-radius: 50%;
  top: 8px;
  left: 8px;
  transform: translate(-65%, -50%);
  z-index: -1;
`;

const DateCell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
