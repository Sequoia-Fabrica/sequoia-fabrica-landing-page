import iCalendarPlugin from '@fullcalendar/icalendar';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { EventContentArg } from '@fullcalendar/core';
import { useBreakpoint } from '@/src/common/useBreakpoint';
import { formatTime } from '@/src/common/dateUtil';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { format } from 'path';

export interface CalendarProps {
  urls: string[];
}

function renderEventContent(eventInfo: EventContentArg): ReactNode {
  let isDayGridMonth: boolean = eventInfo.view.type == "dayGridMonth";
  let eventElement = (
    <div className='break-normal whitespace-normal'>
      {/* This <a> tag seems to be required because of a design flaw in fullCalendar that fails to link to a page when 
      an <a> tag isn't present. Month view doesn't have this issue. It's doing some 
      See bug report: https://github.com/fullcalendar/fullcalendar/issues/6133 */}
      <a href={eventInfo.event.url}></a>
      <b>{formatTime(eventInfo.event.start!)}</b>
      <span className='pr-1'></span>
      <br></br>
      <span>{isDayGridMonth ? truncateString(eventInfo.event.title, 20) : eventInfo.event.title}</span>
    </div>
  );

  if (isDayGridMonth) {
    return wrapEventWithTooltip(eventInfo, eventElement);
  } else {
    return eventElement;
  }
};

const wrapEventWithTooltip = (eventInfo: EventContentArg, eventElement: ReactNode): ReactNode => {
  let startStr = !!eventInfo.event.start ? formatTime(eventInfo.event.start) : "";
  let endStr = !!eventInfo.event.end ? formatTime(eventInfo.event.end) : "";
  return (
    <Popover>
      <PopoverTrigger>{eventElement}</PopoverTrigger>
      <PopoverContent className="Popover z-50 bg-white_smoke w-64 border-2 rounded p-1">
        <div className="text-center">
          {eventInfo.event.title}
        </div>
        <div className="text-center">
          <i>
            {startStr} - {endStr}
          </i>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.substring(0, maxLength - 3) + "...";
  }
}

const Calendar: React.FC<CalendarProps> = ({ urls }) => {

  const calendarRef = useRef(null);

  let tooltipsByEventId = new Map<string, ReactNode>();
  tooltipsByEventId.set("test", undefined);

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
          height="auto"
        />
      </div>
    </>
  );
}

export default Calendar;
