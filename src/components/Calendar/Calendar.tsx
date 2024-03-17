import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { EventContentArg } from '@fullcalendar/core';
import { getCurrentBreakpoint } from '@/src/common/getCurrentBreakpoint';

export interface CalendarProps {
  url: string;
}

const renderEventContent = (eventInfo: EventContentArg) => {
  return (
    <div className='break-normal whitespace-normal'>
      <b>{eventInfo.timeText}</b>
      <span className='pr-1'></span>
      <i>{truncateString(eventInfo.event.title, 30)}</i>
    </div>
  );
};

function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
      return str;
  } else {
      return str.substring(0, maxLength - 3) + "...";
  }
}

const Calendar: React.FC<CalendarProps> = ({ url }) => {

  const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint());

  const calendarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const oldBreakpoint = breakpoint
      const newBreakpoint = getCurrentBreakpoint();
      console.log(oldBreakpoint, newBreakpoint);
      if (oldBreakpoint != newBreakpoint && calendarRef && calendarRef.current) {
        setBreakpoint(newBreakpoint);
        console.log("wtf");
        calendarRef.current
          .getApi()
          .changeView(newBreakpoint == 'sm' ? "dayGridWeek" : "dayGridMonth");
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const events = {
    url: url,
    format: 'ics',
  };

  return (
    <>
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, iCalendarPlugin]}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek'
        }}
        initialView={breakpoint == 'sm' ? "dayGridWeek" : "dayGridMonth"}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
    </>
  );
}

export default Calendar;
