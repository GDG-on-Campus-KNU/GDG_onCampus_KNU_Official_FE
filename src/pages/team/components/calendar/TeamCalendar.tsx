import { useEffect, useState } from 'react';

import { Spacing } from '@gdg/components/common/layouts/spacing';

import {
  TeamName,
  DateCell,
  EventContent,
  GDGoC_KNU_SCHEDULE,
} from '@gdg/pages/team/components';

import './Calendar.style.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';

const TeamCalendar = ({ selectedTeamName }: { selectedTeamName: string }) => {
  const [headerToolbar, setHeaderToolbar] = useState({
    left: 'prev,title,next',
    center: '',
    right: '',
  });
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);
  console.log(2);

  useEffect(() => {
    const updateHeaderToolbar = () => {
      if (window.innerWidth <= 500) {
        setHeaderToolbar({
          left: '',
          center: 'prev,title,next',
          right: '',
        });
      } else {
        setHeaderToolbar({
          left: 'prev,title,next',
          center: '',
          right: '',
        });
      }
    };

    updateHeaderToolbar();
    window.addEventListener('resize', updateHeaderToolbar);
    return () => window.removeEventListener('resize', updateHeaderToolbar);
  }, []);

  const handleEventContent = (arg: {
    event: {
      start: {
        getHours: () => any;
        getMinutes: () => {
          (): any;
          new (): any;
          toString: { (): string; new (): any };
        };
      };
      title: string;
    };
  }) => {
    const eventTime = `${arg.event.start?.getHours()}:${arg.event.start?.getMinutes().toString().padStart(2, '0')}`;
    return <EventContent title={arg.event.title} time={eventTime} />;
  };

  const handleAddEvent = (date: Date) => {
    alert(`Add event for: ${date}`);
  };

  return (
    <>
      <Spacing
        height={{
          lg: 134,
          md: 134,
          sm: 80,
        }}
      />
      <TeamName
        selectedTeamName={`${selectedTeamName} Calendar`}
        description='팀원들과 함께하는 일정을 확인해보세요. 함께하는 즐거움을 느껴보시길 바랍니다!'
      />
      <Spacing
        height={{
          lg: 50,
          md: 34,
          sm: 30,
        }}
      />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={headerToolbar}
        editable={true}
        selectable={true}
        navLinkHint={'클릭시 해당 날짜로 이동합니다.'}
        initialView='dayGridMonth'
        events={GDGoC_KNU_SCHEDULE}
        dayCellContent={(props) => (
          <DateCell
            date={props.date}
            hoveredDate={hoveredDate}
            onAddEvent={handleAddEvent}
          />
        )}
        dayCellDidMount={(arg) => {
          const cell = arg.el;
          cell.addEventListener('mouseenter', () => {
            setHoveredDate(arg.date.toISOString());
          });
          cell.addEventListener('mouseleave', () => {
            setHoveredDate(null);
          });
        }}
        locale={'ko'}
        eventContent={handleEventContent}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          omitZeroMinute: false,
          meridiem: false,
        }}
      />
    </>
  );
};

export default TeamCalendar;
