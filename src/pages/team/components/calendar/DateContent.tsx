import styled from '@emotion/styled';

const today = new Date().toLocaleDateString('en-CA');

console.log(today);

const DateContent = (arg: { date: Date }) => {
  const dateStr = arg.date.toLocaleDateString('en-CA');
  const dayNumber = arg.date.getDate();

  return (
    <>
      {dateStr === today && <TodayCircle />}
      <span style={{ color: dateStr === today ? 'black' : 'inherit' }}>
        {dayNumber}
      </span>
    </>
  );
};

export default DateContent;

const TodayCircle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: var(--color-white);
  border-radius: 50%;
  top: 8px;
  left: 8px;
  transform: translate(-50%, -35%);
  z-index: -1;
`;
