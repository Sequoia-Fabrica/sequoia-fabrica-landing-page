import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState, useEffect, useRef } from 'react';
import { EventContentArg } from '@fullcalendar/core';
import { useBreakpoint } from '@/src/common/useBreakpoint';

export interface CalendarProps {
  urls: string[];
}

const renderEventContent = (eventInfo: EventContentArg) => {
  return (
    <div className='break-normal whitespace-normal'>
      <b>{eventInfo.timeText}</b>
      <span className='pr-1'></span>
      <i>{truncateString(eventInfo.event.title, 25)}</i>
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

const Calendar: React.FC<CalendarProps> = ({ urls }) => {

  const [view, setView] = useState("dayGridMonth");

  const calendarRef = useRef(null);
  
  const { isAboveMd } = useBreakpoint("md");

  useEffect(() => {
    const handleResize = () => {
      const oldView = view;
      const newView = isAboveMd ? "dayGridMonth" : "listWeek";
      if (oldView != newView && calendarRef && calendarRef.current) {
        setView(newView);
        (calendarRef.current as InstanceType<typeof FullCalendar>)
          .getApi()
          .changeView(newView);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isAboveMd, view]);

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
          initialView={view}
          eventSources={events}
          eventContent={renderEventContent}
        />
      </div>
    </>
  );
}

export default Calendar;
