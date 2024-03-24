import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState, useEffect, useRef } from 'react';
import { EventContentArg } from '@fullcalendar/core';
import { getCurrentBreakpoint } from '@/src/common/getCurrentBreakpoint';

export interface CalendarProps {
  urls: string[];
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

function getViewByBreakpoint(breakpoint: string) {
  return breakpoint == 'lg' || breakpoint == 'xl' ? "dayGridMonth" : "listWeek"
}

const Calendar: React.FC<CalendarProps> = ({ urls }) => {

  const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint());

  const calendarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const oldBreakpoint = breakpoint
      const newBreakpoint = getCurrentBreakpoint();
      if (oldBreakpoint != newBreakpoint && calendarRef && calendarRef.current) {
        setBreakpoint(newBreakpoint);
        calendarRef.current
          .getApi()
          .changeView(getViewByBreakpoint(newBreakpoint));
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const events = urls.map(url => {
    return {
      url: url,
      format: 'ics',
    }
  })

  return (
    <>
      <div>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, listPlugin, iCalendarPlugin]}
          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next'
          }}
          initialView={getViewByBreakpoint(breakpoint)}
          eventSources={events}
          eventContent={renderEventContent}
        />
      </div>
    </>
  );
}

export default Calendar;
