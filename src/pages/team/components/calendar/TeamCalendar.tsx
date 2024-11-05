import { useEffect, useState } from 'react';

import { Spacing } from '@gdg/components/common/layouts/spacing';

import { TeamName } from '../name';
import './Calendar.style.css';
import DateContent from './DateContent';
import EventContent from './EventContent';
import { GDGoC_KNU_SCHEDULE } from './Schedule';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';

const TeamCalendar = ({ selectedTeamName }: { selectedTeamName: string }) => {
  const [headerToolbar, setHeaderToolbar] = useState({
    left: 'prev,title,next',
    center: '',
    right: '',
  });

  const handleDateClick = (arg: { dateStr: string }) => {
    alert(arg.dateStr);
  };

  // 윈도우 크기 변경을 감지하여 headerToolbar 위치 조정
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
        dateClick={handleDateClick}
        initialView='dayGridMonth'
        events={GDGoC_KNU_SCHEDULE}
        dayCellContent={DateContent}
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
