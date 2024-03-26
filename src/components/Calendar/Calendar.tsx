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

const renderEventContent = (eventInfo: EventContentArg, view: string) => {
  let shouldTruncate: boolean = view == "dayGridMonth";
  return (
    <div className='break-normal whitespace-normal'>
      {/* This <a> tag seems to be required because of a design flaw in fullCalendar that fails to link to a page when 
      an <a> tag isn't present. Month view doesn't have this issue. It's doing some 
      See bug report: https://github.com/fullcalendar/fullcalendar/issues/6133 */}
      <a href={eventInfo.event.url}></a>
      <b>{eventInfo.timeText}</b>
      <span className='pr-1'></span>
      <i>{shouldTruncate ? truncateString(eventInfo.event.title, 25) : eventInfo.event.title}</i>
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

  const calendarRef = useRef(null);
  
  const { isAboveMd } = useBreakpoint("md");

  const [view, setView] = useState(isAboveMd ? "dayGridMonth" : "listWeek");

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
