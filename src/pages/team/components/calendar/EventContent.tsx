import styled from '@emotion/styled';

type EventContentProps = {
  title: string;
  time: string;
};

const EventContent = ({ title, time }: EventContentProps) => {
  return (
    <EventContainer>
      <Title>{title}</Title>
      <Time>{time}</Time>
    </EventContainer>
  );
};

export default EventContent;

const EventContainer = styled.div`
  width: 100%;
  background-color: var(--color-white);
  color: var(--color-abony);
  border-radius: 12px;
  padding: 6px;
`;

const Title = styled.div`
  font-size: var(--font-size-sm);
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 768px) {
    font-size: var(--font-size-xxs);
  }
`;

const Time = styled.div`
  font-size: var(--font-size-xs);
  font-weight: 500;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    content-visibility: hidden;
  }
`;
